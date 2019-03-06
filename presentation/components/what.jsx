// import React
import React from 'react';

// Import Spectacle Core tags
import { Heading, Notes, BlockQuote, Quote, Cite, Appear, List, ListItem } from 'spectacle';
import { Container, Row, Column } from './layout.jsx';

const listItem = {
    fontSize: '2rem'
};

const WhatIs = () => {
    return (
        <Container>
            <Row>
                <Column>
                    <Heading size={3} lineHeight={1} textColor="secondary">
                        What is RxJS
                            </Heading>
                </Column>
            </Row>
            <Appear order={0}>
                <Row style={{ justifyContent: 'space-evenly', paddingTop: '50px' }}>
                    <BlockQuote>
                        <Quote
                            style={{
                                backgroundColor: 'grey',
                                fontSize: '1.7rem',
                                width: '700px',
                                paddingTop: '20px',
                                paddingBottom: '20px'
                            }}
                        >
                            RxJS Observables represent a collection of values over time, and can be accessed in familiar ways similar to arrays. <br /><br />
                            RxJS can be thought of as underscore or lodash for asynchronous operations
                                </Quote>
                        <Cite
                            style={{
                                fontSize: '1.2rem'
                            }}
                            textColor="black"
                        >
                            <italic>Ben Lesh - RxJS core team lead</italic>
                        </Cite>
                    </BlockQuote>
                </Row>
            </Appear>
            <Appear order={1}>
                <List>
                    <ListItem style={listItem}>Implementation of ReactiveX project</ListItem>
                    <ListItem style={listItem}>Based on Gang of Four's Observer pattern</ListItem>
                </List>
            </Appear>
            <Notes>
                🎓 What is RxJS<br />
                👉 Think of it like cars in traffic light - once green - it's subscribed <br />
                👉 It flows overtime <br />
                👉 it can be directed to the other directions using operators<br />
                👉 [Next] - [List Item]<br />
                👉 It has a few implementation in various languages like Rx C, Rx Java, Rx c# etc <br />
                👉 Disclaimer: It's based on my knowledge and some content described are also based on my own experience <br />
            </Notes>
        </Container>
    );
};

export default WhatIs;
