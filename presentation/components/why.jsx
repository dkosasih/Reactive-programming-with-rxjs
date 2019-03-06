// import React
import React from 'react';

// Import Spectacle Core tags
import { Heading, Notes, Appear } from 'spectacle';
import { Container, Row, Column } from './layout.jsx';
import styled from 'styled-components';

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

const Why = ({ withAppear = true }) => {
    const Content = (
        <Row style={{ justifyContent: 'space-evenly', paddingTop: '50px', alignItems: 'stretch' }}>
            <ComparisonBlock style={{ flex: '0 0 auto' }}>
                <div>
                    <strong>Observable</strong>
                </div>
                <div>&nbsp;</div>
                <div style={leftAlignText}>👓 Stream of value</div>
                <div style={leftAlignText}>👓 Cancellable</div>
                <div style={leftAlignText}>👓 Lazy</div>
                <div style={leftAlignText}>👓 Unicast</div>
            </ComparisonBlock>
            <ComparisonBlock style={{ flex: '0 0 auto' }}>
                <div>
                    <strong>Promise</strong>
                </div>
                <div>&nbsp;</div>
                <div style={leftAlignText}>🤞 Read-only view to a single future value</div>
                <div style={leftAlignText}>🤞 Non-cancellable</div>
                <div style={leftAlignText}>🤞 Eager</div>
                <div style={leftAlignText}>🤞 Multicast</div>
            </ComparisonBlock>
        </Row>
    );

    return (
        <Container>
            <Row>
                <Column>
                    <Heading size={3} lineHeight={1} textColor="secondary">
                        Why RxJS
                    </Heading>
                </Column>
            </Row>
            {withAppear ? <Appear order={0}>{Content}</Appear> : Content}
            <Notes>
                🎓 Why RxJS
                <br />
                👉 People often compare Observable with Promise - so lets compare the two and find
                out what Observable is different
                <br />
                👉 cancelable - Observable can be cancelled; talk about lag when doing a server one
                `then` is called it's uncancellabe - it will have to run the function; unlike promise, you can still cancel the
                operation with unsubscribe. but, unsubscribing is not the only way we'll see more
                later when we talk about `higher-order-mapping operators`
                <br />
                👉 lazy - Observable will only run when it's subscribed - promise will run after the function is being called
                <br />
                👉 unicast-multicast - promise is multicast; observable is unicast; we'll see this in the next example
                <br />
            </Notes>
        </Container>
    );
};

export default Why;
