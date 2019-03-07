let counter = 0;
let clickString = '';
const click$ = fromEvent(document, 'click');
const interval$ = interval(1000);

// mergeMap
const mm$ = click$.pipe(
  mergeMap(event => {
    clickString= `click ${counter++}`;
    return interval$;
  })
);

mm$.subscribe(num => console.log(clickString, num));
