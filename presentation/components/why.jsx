// import React
import React from 'react';

// Import Spectacle Core tags
import { Heading, Notes, BlockQuote, Quote, Cite, Appear, Markdown } from 'spectacle';
import { Container, Row, Column, ColumnSmall, Footer } from './layout.jsx';
import styled from 'styled-components';

const ComparisonBlock = styled.div`
    background-color:grey;
    padding:10px;
    width:100%;
    margin-left:10px;
`;

const Why = () => {
    return (
        <Container>
            <Row>
                <Column>
                    <Heading size={3} lineHeight={1} textColor="secondary">
                        Why RxJS
                    </Heading>
                </Column>
            </Row>
            <Appear order={0}>
                <Row style={{ justifyContent: 'space-evenly', paddingTop: '50px' }}>
                    <ComparisonBlock>blah 1</ComparisonBlock>
                    <ComparisonBlock>blah 2</ComparisonBlock>
                </Row>
            </Appear>
            <Notes>
                <Markdown>
                    👉 People often compare `Observable` with `Promise` - so lets compare the two
                    and find out what `Observable` is different <br />
                </Markdown>
            </Notes>
        </Container>
    );
};

export default Why;
