// import React
import React from 'react';

// Import Spectacle Core tags
import { Heading, Notes, Appear, Image, List, ListItem } from 'spectacle';
import { Container, Row, Column } from './layout.jsx';

const listItem = {
    fontSize: '2rem'
};

const Multicast = () => {
    return (
        <Container>
            <Row>
                <Column>
                    <Heading size={3} lineHeight={1} textColor="secondary">
                        Multicasting Observable
                    </Heading>
                </Column>
            </Row>
            <div>&nbsp;</div>
            <Appear order={0}>
                <List>
                    <ListItem style={listItem}>Hot vs Cold Observable</ListItem>
                    <ListItem style={listItem}>Subject is your friend</ListItem>
                </List>
            </Appear>
            <Notes>
                🎓 Multicast
                👉 an Observable multicast ability is depends on whether the observable is hot or cold
                <br />
                👉 cold: the value producer is inside of the Observable and only created when there is a subscriber i.e. interval
                <br />
                👉 hot: the value producer is outside of the Observable i.e. fromEvent
                <br />
                👉 but, how do we make an observable that is cold into a hot observable so that is multicast - that is Subject
                <br />
            </Notes>
        </Container>
    );
};

export default Multicast;
