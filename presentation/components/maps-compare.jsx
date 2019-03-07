// import React
import React from 'react';

// Import Spectacle Core tags
import { Heading, Notes, Appear, List, ListItem } from 'spectacle';
import { Container, Row, Column } from './layout.jsx';
import { images } from './images.js';
import styled from 'styled-components';

const listItem = {
    fontSize: '2rem'
};

const leftAlignText = {
    textAlign: 'left'
};

const ComparisonBlock = styled.div`
    background-color: grey;
    padding: 10px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
`;

const MapOperators = () => {
    return (
        <Container>
            <Row>
                <Column>
                    <Heading size={5} lineHeight={1} textColor="secondary">
                        Higher-order Observable <br /> map operators
                    </Heading>
                </Column>
            </Row>
            <div>&nbsp;</div>

            <Row
                style={{
                    justifyContent: 'space-evenly',
                    paddingTop: '50px',
                    alignItems: 'stretch'
                }}
            >
                <ComparisonBlock>
                    <div>
                        <strong>mergeMap</strong>
                    </div>
                    <div>&nbsp;</div>
                    <div style={leftAlignText}>Output:</div>
                    <div style={leftAlignText}><strong>click 0</strong> 0</div>
                    <div style={leftAlignText}><strong>click 0</strong> 1</div>
                    <div style={leftAlignText}>[click]</div>
                    <div style={leftAlignText}><strong>click 1</strong> 0</div>
                    <div style={leftAlignText}><strong>click 1</strong> 2</div>
                    <div style={leftAlignText}><strong>click 1</strong> 1</div>
                    <div style={leftAlignText}><strong>click 1</strong> 3</div>
                </ComparisonBlock>
                <ComparisonBlock>
                    <div>
                        <strong>switchMap</strong>
                    </div>
                    <div>&nbsp;</div>
                    <div style={leftAlignText}>Output:</div>
                    <div style={leftAlignText}><strong>click 0</strong> 0</div>
                    <div style={leftAlignText}><strong>click 0</strong> 1</div>
                    <div style={leftAlignText}>[Click]</div>
                    <div style={leftAlignText}><strong>click 1</strong> 0</div>
                    <div style={leftAlignText}><strong>click 1</strong> 1</div>
                    <div style={leftAlignText}><strong>click 1</strong> 2</div>
                </ComparisonBlock>
                <ComparisonBlock>
                    <div>
                        <strong>concatMap</strong>
                    </div>
                    <div>&nbsp;</div>
                    <div style={leftAlignText}>Output:</div>
                    <div style={leftAlignText}><strong>click 0</strong> 0</div>
                    <div style={leftAlignText}>[Click]</div>
                    <div style={leftAlignText}><strong>click 0</strong> 1</div>
                    <div style={leftAlignText}><strong>click 0</strong> 2</div>
                    <div style={leftAlignText}><strong>click 1</strong> 0</div>
                    <div style={leftAlignText}><strong>click 1</strong> 1</div>
                    <div style={leftAlignText}><strong>click 1</strong> 2</div>
                </ComparisonBlock>
                <ComparisonBlock>
                    <div>
                        <strong>exhaustMap</strong>
                    </div>
                    <div>&nbsp;</div>
                    <div style={leftAlignText}>Output:</div>
                    <div style={leftAlignText}><strong>click 0</strong> 0</div>
                    <div style={leftAlignText}>[Click]</div>
                    <div style={leftAlignText}><strong>click 0</strong> 1</div>
                    <div style={leftAlignText}><strong>click 0</strong> 2</div>
                </ComparisonBlock>
            </Row>

            <Notes>
                🎓 map operators
                👉 concatMap & exhaustMap: say the inner observable have take(3) operators applied
            </Notes>
        </Container>
    );
};

export default MapOperators;
