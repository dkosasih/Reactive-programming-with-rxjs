// import React
import React from 'react';

// Import Spectacle Core tags
import { Heading, Notes, Appear, Image } from 'spectacle';
import { Container, Row, Column } from './layout.jsx';
import { images } from './images.js';

const Sorcery = () => {
    return (
        <Container>
            <Row>
                <Column>
                    <Heading size={5} lineHeight={1} textColor="secondary">
                        So what kind of sorcery does Observable perform ... 🤔
                    </Heading>
                </Column>
            </Row>
            <div>&nbsp;</div>
            <Appear order={0}>
                <Row>
                    <Image src={images.science} width={300} height={300}/>
                </Row>
            </Appear>
            <Notes>
                🎓 what kind of sorcery Observable perform
                <br />
                👉 There is no special ingridients with Observable
                <br />
                👉 Observable is just a javascript functions
                <br />
                👉 And RxJS just ensure those functions is perform as it intended to
                <br />
                👉 Let's have a look at what Observable is like - 
                disclaimer: this is not implementation of Observable, it's just a conceptual.
                There are more capable people who work on RxJS that implements Observable properly
                <br />
            </Notes>
        </Container>
    );
};

export default Sorcery;
