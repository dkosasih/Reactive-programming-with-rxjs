// import React
import React from 'react';

// Import Spectacle Core tags
import { Heading, Notes, Appear, Image, List, ListItem } from 'spectacle';
import { Container, Row, Column } from './layout.jsx';

const listItem = {
    fontSize: '2rem'
};

const Thanks = () => {
    return (
        <Container>
            <Row>
                <Column>
                    <Heading size={1} lineHeight={1} textColor="secondary">
                        Thank you
                    </Heading>
                </Column>
            </Row>
            <div>&nbsp;</div>
            <div style={{color: 'blue'}}>@dkosasih1</div>
            <Notes>
                🎓 Thanks
                <br />
            </Notes>
        </Container>
    );
};

export default Thanks;
