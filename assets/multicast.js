function getRandom() {
    return Math.floor(Math.random() * Math.floor(100));
}

const int = interval(1000).pipe(
    map(x => getRandom()),
    take(10)
);

// 👉 Subject: Make it hot
const sub = new Subject();
sub.subscribe((x) => console.log('sub1', x));

setTimeout(() => {
  sub.subscribe((x) => console.log('sub2 after 5ms', x));
}, 500);

int.subscribe(sub);

// // 👉 multicast operator make it more readable
const multi = int.pipe(
  multicast(new Subject())
);
multi.subscribe((x) => console.log('multi1', x));

setTimeout(() => {
  multi.subscribe(x => console.log('multi after 5ms', x))
}, 500)

multi.connect();

// 👉 publish is a thin wrapper which call multicast and pass the Subject along with it
const pub = int.pipe(
  publish()
);

pub.subscribe((x) => console.log('pub', x));

setTimeout(() => {
  pub.subscribe((x) => console.log('pub after 5ms', x));
}, 500);

pub.connect();

// 👉 multicast operator with refCount() to connect the observable automatically
// when first subscription is made - it will start emit, and count up for the next.
// after that, if all subscription dropped of - it will automatically unsubscribe and complete from the source
const multiRef = int.pipe(
    multicast(new Subject()),
    refCount()
);

// first subscription - straight away
const subs1 = multiRef.subscribe(x => console.log('multiRef', x));

// second subscription 900ms later - this expect the same value as first subs
// 1.1s later both getting unsubscribed - see below
// because of the refCount - the source is unsubscribed
let subs2;
setTimeout(() => {
    subs2 = multiRef.subscribe(x => console.log('multiRef after 9ms', x));
}, 900);

// this subscription after refCount() dropped to 0
// which means new subscription to the source is being made
setTimeout(() => {
    multiRef.subscribe(x => console.log('multiRef after 1.5s', x));
}, 1500);
// same as above
setTimeout(() => {
    multiRef.subscribe(x => console.log('multiRef after 1.7s', x));
}, 1700);

setTimeout(() => {
    subs1.unsubscribe();
    subs2.unsubscribe();
}, 1100);
