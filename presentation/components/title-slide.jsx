// Import React
import React from 'react';

// Import Spectacle Core tags
import {
    Heading,
    Image,
    Slide,
} from 'spectacle';

import { Container, Row, Column, ColumnSmall, Footer, } from './layout.jsx';
import { images } from './images.js';

const Title = () => {
    return (
        <Slide transition={['fade']} bgColor="primary">
            <Container>
                <Row>
                    <ColumnSmall>
                        <Image src={images.rxLogo} width={200} />
                    </ColumnSmall>
                    <Column>
                        <Heading size={1} fit lineHeight={1} textColor="secondary">
                            Reactive programming with RxJS
                        </Heading>
                    </Column>
                </Row>
                <Footer>
                    <Image
                        src={images.profile}
                        style={{ 'border-radius': '50%', margin: 0, float: 'left' }}
                        width={120}
                        height={120}
                    />
                    <Column style={{'textAlign':'left', 'fontSize':'25px'}}>
                        <div
                            style={{
                                width: '100%',
                                'backgroundColor': 'red',
                                height: '3px',
                                'marginTop': '60px'
                            }}
                        />
                        <div>Full-stack developer</div>
                        <div>RxJS contributor</div>
                    </Column>
                </Footer>
            </Container>
        </Slide>
    );
};

export default Title;
