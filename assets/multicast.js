// Multicast vs Unicast

function getRandom() {
    return Math.floor(Math.random() * Math.floor(100));
}

const promise = new Promise(resolve => {
    resolve(getRandom());
});
promise.then(result => console.log(result));
promise.then(result => console.log(result));

// Output: (it will always produce the same number)

const observable = new Observable(obs => {
    obs.next(getRandom());
  })
const a = observable.subscribe(result => console.log(result));
const b = observable.subscribe(result => console.log(result));

// Output: (will produce a different number between subscription)
