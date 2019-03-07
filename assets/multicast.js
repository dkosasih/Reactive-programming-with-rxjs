function getRandom() {
    return Math.floor(Math.random() * Math.floor(100));
}

const int = interval(100).pipe(
    map(x => getRandom()),
    take(5)
);

// 👉 Subject: Make it hot
const sub = new Subject();
sub.subscribe(x => console.log('sub1', x));

setTimeout(() => {
    sub.subscribe(x => console.log('sub2 after .5ms', x));
}, 50);

int.subscribe(sub);

// // 👉 multicast operator make it more readable
const multi = int.pipe(multicast(new Subject()));
multi.subscribe(x => console.log('multi1', x));

setTimeout(() => {
    multi.subscribe(x => console.log('multi after .5ms', x));
}, 50);

multi.connect();

// 👉 publish is a thin wrapper which call multicast and pass the Subject along with it
const pub = int.pipe(publish());

pub.subscribe(x => console.log('pub', x));

setTimeout(() => {
    pub.subscribe(x => console.log('pub after 5ms', x));
}, 510);

pub.connect();

// 👉 publish operator with refCount() to connect the observable automatically
// when first subscription is made - it will start emit, and count up for the next.
// after that, if all subscription dropped of - it will automatically unsubscribe and complete from the source
const publishRef = int.pipe(
    publish(),
    refCount()
);

// first subscription - straight away
const subs1 = publishRef.subscribe(x => console.log('publishRef', x));

// second subscription .9ms later - this expect the same value as first subs
// 1.1s later both getting unsubscribed - see below
// which made the refCount drops to 0 - the source is unsubscribed
let subs2;
setTimeout(() => {
    subs2 = publishRef.subscribe(x => console.log('publishRef after .9ms', x));
}, 90);

// this subscription after refCount() dropped to 0
// which means new subscription to the source is being made
setTimeout(() => {
    publishRef.subscribe(x => console.log('publishRef after 1.5ms', x));
}, 150);
// same as above
setTimeout(() => {
    publishRef.subscribe(x => console.log('publishRef after 1.7ms', x));
}, 170);

// late subscription after 77ms, will not receive anything because source has been completed
setTimeout(() => {
  pubRep.subscribe(x => console.log('pubRep after 77ms', x))
}, 770)

setTimeout(() => {
    subs1.unsubscribe();
    subs2.unsubscribe();
}, 110);

// 👉 Share is and operator that does publish and refCount together - however share is using factory function
// under the hood to create new subject everytime - which means if there is any subscription
// is made after refCount drops to 0 - new subject will be created and perform a new subscription to the observable
const shr = int.pipe(share());

shr.subscribe(x => console.log('shr', x));

setTimeout(() => {
    shr.subscribe(x => console.log('shr after .5ms', x));
}, 510);
