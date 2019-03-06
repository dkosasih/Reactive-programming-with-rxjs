// import React
import React from 'react';

// Import Spectacle Core tags
import { Heading, Notes, Appear, Image, List, ListItem } from 'spectacle';
import { Container, Row, Column } from './layout.jsx';
import { images } from './images.js';

const listItem = {
    fontSize: '2rem'
};

const CommonOps = () => {
    return (
        <Container>
            <Row>
                <Column>
                    <Heading size={3} lineHeight={1} textColor="secondary">
                        Common operators
                    </Heading>
                </Column>
            </Row>
            <div>&nbsp;</div>
            <Appear order={0}>
                <List>
                    <ListItem style={listItem}><strong>map:</strong> 111 hit</ListItem>
                    <ListItem style={listItem}><strong>ofType:</strong> 44 hit</ListItem>
                    <ListItem style={listItem}><strong>catchError:</strong> 41 hit</ListItem>
                    <ListItem style={listItem}><strong>switchMap:</strong> 41 hit</ListItem>
                    <ListItem style={listItem}><strong>take:</strong> 20 hit</ListItem>
                    <ListItem style={listItem}><strong>skipWhile:</strong> 14 hit</ListItem>
                    <ListItem style={listItem}><strong>distinct:</strong> 13 hit</ListItem>
                    <ListItem style={listItem}><strong>publishReplay:</strong> 12 hit</ListItem>
                    <ListItem style={listItem}><strong>refCount:</strong> 12 hit</ListItem>
                    <ListItem style={listItem}><strong>tap:</strong> 10 hit</ListItem>
                    <ListItem style={listItem}><strong>takeUntil:</strong> 4 hit</ListItem>
                    <ListItem style={listItem}><strong>skip:</strong> 2 hit</ListItem>
                    <ListItem style={listItem}><strong>startWith:</strong> 2 hit</ListItem>
                    <ListItem style={listItem}><strong>mergeMap:</strong> 1 hit</ListItem>
                </List>
            </Appear>
            <Notes>
                🎓 Common operators - common based on my experience
                <br />
                👉 a script that's based on AST - I had a talk about this a few earlier.
                created by Tim - ran against our project , to check on what are the rxjs operators being used in a project 
                <br />
                👉 map: Apply a project function to a input observable and output a new value as observable
                <br />
                👉 ofType: Similar to filter operators - this is rxjs operators extensions for ngRx package
                <br />
                👉 catchError: catches observables error to returning another observable or re-throw the error
                <br />
                👉 switchMap: This is a higher-order observable. we will come back to this one in the next slide
                <br />
                👉 take: take the first x count of emitted value from an observable then completes
                <br />
                👉 skipWhile: skip from emitting Observable while the given condition is true and emit the rest after the condition change to false
                <br />
                👉 distinct: emit distinct set of values; note: this does not work for object comparison - our implementation of distinct is incorrect
                <br />
                👉 publishReplay and refCount: I will skip this as well for now and will discuss on multicast later 
                <br />
                👉 tap: tapping into emitted observable but it does not alter the output observable; usually use to perform a side effect of emitted observable
                <br />
                👉 takeUntil: emit value from an input observables until a secondary observable emit any value, 
                then the input will completes; common pattern seen in the usage is when we want to complete and observable based on certain certain condition
                e.g: component unmount in React or onDestroy
                <br />
                👉 skip: skip x count from emitting observable; and continue with the rest
                <br />
                👉 startWith: emit the values you specify before the input observable even emit anything then continue with whatever the input observable is set to emit
                <br />
                👉 mergeMap: let talk about this NOW - higher order observable
                <br />
            </Notes>
        </Container>
    );
};

export default CommonOps;
