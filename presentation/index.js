// Import React
import React from 'react';

// Import Spectacle Core tags
import {
    BlockQuote,
    Cite,
    Deck,
    Heading,
    Image,
    List,
    ListItem,
    Notes,
    Quote,
    Slide,
    Text,
    Appear,
    CodePane
} from 'spectacle';

import '../assets/prism-syntax-highlight.css';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import CodeSlide from 'spectacle-code-slide';

import Title from './components/title-slide.jsx';
import WhatIs from './components/what.jsx';
import Why from './components/why.jsx';
import Sorcery from './components/sorcery';

// Require CSS
require('normalize.css');

const theme = createTheme(
    {
        primary: 'white',
        secondary: '#1F2022',
        tertiary: '#03A9FC',
        quaternary: '#CECECE'
    },
    {
        primary: 'Montserrat',
        secondary: 'Helvetica'
    }
);

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck theme={theme}>
                <Title />
                <Slide transition={['fade']} bgColor="primary">
                    <WhatIs />
                </Slide>
                <Slide transition={['fade']} bgColor="primary">
                    <Why />
                </Slide>
                <CodeSlide
                    note="Cancellable: 'Handling processed value' is not being processed because it has been unsubscribed and cancelled"
                    lang="javascript"
                    bgColor="secondary"
                    Title="Cancellable"
                    transition={[]}
                    code={require('!!raw-loader!../assets/cancellable.js')}
                    ranges={[
                        { loc: [0, 8] },
                        { loc: [9, 12] },
                        { loc: [13, 22] },
                        { loc: [23, 25] }
                    ]}
                />
                <Slide bgColor="primary" transition={[]}>
                    <Why withAppear={false} />
                </Slide>
                <CodeSlide
                    note="Lazy-earger: Promise: will execute right after the line is declared; observable will not do anything until it's being subscribed"
                    lang="javascript"
                    bgColor="secondary"
                    title="Lazy - Eager"
                    transition={[]}
                    code={require('!!raw-loader!../assets/lazy.js')}
                    ranges={[
                        { loc: [0, 6] },
                        { loc: [7, 11] },
                        { loc: [12, 19] },
                        { loc: [20, 24] }
                    ]}
                />
                <Slide bgColor="primary" transition={[]}>
                    <Why withAppear={false} />
                </Slide>
                <CodeSlide
                    note="unicast-multicast: "
                    lang="javascript"
                    bgColor="secondary"
                    title="Unicast - Multicast"
                    transition={[]}
                    code={require('!!raw-loader!../assets/multicast.js')}
                    ranges={[
                        { loc: [2, 5] },
                        { loc: [6, 11] },
                        { loc: [12, 13] },
                        { loc: [14, 19] },
                        { loc: [20, 21] }
                    ]}
                />
                <Slide transition={['fade']} bgColor="primary">
                    <Sorcery />
                </Slide>
                <CodeSlide
                    note="unicast-multicast: "
                    lang="ts"
                    bgColor="secondary"
                    title="Unicast - Multicast"
                    transition={[]}
                    code={require('!!raw-loader!../assets/observable.ts')}
                    ranges={[
                        { loc: [0, 5] },
                        { loc: [6, 11] },
                        { loc: [12, 13] },
                        { loc: [14, 19] },
                        { loc: [20, 21] }
                    ]}
                />
            </Deck>
        );
    }
}
