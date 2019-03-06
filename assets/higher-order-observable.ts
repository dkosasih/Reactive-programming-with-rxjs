let counter = 0;
let clickString = '';
const click$ = fromEvent(document, 'click');
const interval$ = interval(1000);

click$.subscribe(event => {
    clickString = `click ${counter++}`;
    interval$.subscribe(num => {
        console.log(clickString, num);
    });
});

// Output:
// click 0 0
// click 0 1
// [click]
// click 1 0
// click 1 2
// click 1 1
// click 1 3 ... 
