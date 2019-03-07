// import React
import React from 'react';

// Import Spectacle Core tags
import { Heading, Notes, Appear, Image, List, ListItem } from 'spectacle';
import { Container, Row, Column } from './layout.jsx';

const listItem = {
    fontSize: '2rem'
};

const References = () => {
    return (
        <Container>
            <Row>
                <Column>
                    <Heading size={3} lineHeight={1} textColor="secondary">
                        References
                    </Heading>
                </Column>
            </Row>
            <div>&nbsp;</div>
            <List>
                <ListItem style={listItem}>https://itnext.io/javascript-promises-vs-rxjs-observables-de5309583ca2</ListItem>
                <ListItem style={listItem}>https://www.youtube.com/watch?v=m40cF91F8_A</ListItem>
                <ListItem style={listItem}>https://xgrommx.github.io</ListItem>
                <ListItem style={listItem}>https://blog.angularindepth.com/rxjs-understanding-the-publish-and-share-operators-16ea2f446635</ListItem>
                <ListItem style={listItem}>https://medium.com/@cartant/rxjs-whats-changed-with-sharereplay-65c098843e95</ListItem>
                <ListItem style={listItem}>https://github.com/timdeschryver/rxjs-operator-counter</ListItem>
            </List>
        </Container>
    );
};

export default References;
