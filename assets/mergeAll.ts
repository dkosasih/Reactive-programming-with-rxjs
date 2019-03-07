let counter = 0;
let clickString = '';
const click$ = fromEvent(document, 'click');
const interval$ = interval(1000);

const observable$ = click$.pipe(
  map(event => {
    clickString = `click ${counter++}`;
    return interval$;
  })
);

// mergeAll
observable$.pipe(
  mergeAll()
).subscribe(num => console.log(clickString, num));
