// import React
import React from 'react';

// Import Spectacle Core tags
import { Heading, Notes, Appear, List, ListItem } from 'spectacle';
import { Container, Row, Column } from './layout.jsx';
import { images } from './images.js';

const listItem = {
    fontSize: '2rem'
};

const HoO = ({ withFormula = false,}) => {
    const AppearContent = (
        <List>
            <ListItem style={listItem}>mergeMap{withFormula ? (<span> = mergeAll + map</span>) : null}</ListItem>
            <ListItem style={listItem}>switchMap{withFormula ? (<span> = switchAll + map</span>) : null}</ListItem>
            <ListItem style={listItem}>concatMap{withFormula ? (<span> = concatAll + map</span>) : null}</ListItem>
            <ListItem style={listItem}>exhaustMap{withFormula ? (<span> = exhaust + map</span>) : null}</ListItem>
        </List>
    )

    return (
        <Container>
            <Row>
                <Column>
                    <Heading size={5} lineHeight={1} textColor="secondary">
                        Higher-order Observable
                    </Heading>
                </Column>
            </Row>
            <div>&nbsp;</div>
            {withFormula ? AppearContent : <Appear order={0}>{AppearContent}</Appear>}
            <Notes>
                🎓 Higher-order observable
                <br />
                👉 It's a cool name for an observable that returns another observable
                <br />
                👉 there are 4 commonly use Higher-order observables: we have seen 2 being used in
                the previous slide - again, based on my knowledge of usage
                <br />
                👉 chanches are you have probably at least seen two of them
                <br />
                👉 let's have a look at what they are. <br />We will focus on the first two for the interest of time<br /> the rest would be similar
                <br />
            </Notes>
        </Container>
    );
};

export default HoO;
