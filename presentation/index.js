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
import Sorcery from './components/sorcery.jsx';
import CommonOps from './components/common-operators.jsx';
import HoO from './components/higher-order-observable.jsx';

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
                    notes="Cancellable: 'Handling processed value' is not being processed because it has been unsubscribed and cancelled"
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
                    notes="Lazy-earger: Promise: will execute right after the line is declared; observable will not do anything until it's being subscribed"
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
                    notes={
                        <div>
                            unicast-multicast: promise is multicast because the function will be
                            executed once and re-use after.
                            <br />
                            whereas observable will call the executor function on each subscribe.
                            but- there are a time where we want to multicast our observable which we
                            will discuss in the later slides.
                        </div>
                    }
                    lang="javascript"
                    bgColor="secondary"
                    title="Unicast - Multicast"
                    transition={[]}
                    code={require('!!raw-loader!../assets/multicast.js')}
                    ranges={[
                        { loc: [1, 6] },
                        { loc: [7, 15] },
                        { loc: [16, 17] },
                        { loc: [18, 27] },
                        { loc: [28, 29] }
                    ]}
                />
                <Slide transition={['fade']} bgColor="primary">
                    <Sorcery />
                </Slide>
                <CodeSlide
                    notes={
                        <div>
                            👉 Subscriber: It's sort of observer wrapper that implements Observer to
                            implements the logic of the Observable <br />
                            👉 Subscriber next, error, complete: e.g. no more next after completion
                            or error <br />
                            👉 Subscription: `add()` here is the cleanup logic being held together
                            until the subscription function is called and it will cleanup the rest
                            <br />
                            👉 Subscription: `add()` here is the cleanup logic being held together
                            until the subscription function is called and it will cleanup the rest
                            <br />
                            👉 Observable basically is the orchestrator of the classes above
                            creating new Subscription class which a subscriber class which also take
                            a plain observer so what it can protect the 'misuse' of observer.
                            <br />
                            👉 observable - not talking about operators implementation as they have
                            a similar concept. they are series of functions chain together to
                            process and produce a desired output from a given input. We'll have a
                            look at some common operators (at least from my experience)
                        </div>
                    }
                    lang="ts"
                    bgColor="secondary"
                    title="Unicast - Multicast"
                    transition={[]}
                    code={require('!!raw-loader!../assets/observable.ts')}
                    ranges={[
                        { loc: [0, 5] },
                        { loc: [6, 13] },
                        { loc: [14, 35] },
                        { loc: [37, 51] },
                        { loc: [52, 63] }
                    ]}
                />
                <Slide transition={['fade']} bgColor="primary">
                    <CommonOps />
                </Slide>
                <Slide transition={['fade']} bgColor="primary">
                    <HoO />
                </Slide>
                <Slide transition={[]} bgColor="primary">
                    <HoO withFormula={true}/>
                </Slide>
                <CodeSlide
                    notes={
                        <div>
                            👉 declare variable
                            <br />
                            👉 talk about subscribeing click event
                            <br />
                            👉 then setup the click even output and subscribing the interval observable
                            <br />
                            👉 then output the value together
                            <br />
                        </div>
                    }
                    lang="ts"
                    bgColor="secondary"
                    title="higher-order observable"
                    transition={[]}
                    code={require('!!raw-loader!../assets/higher-order-observable.ts')}
                    ranges={[
                        { loc: [0, 4] },
                        { loc: [5, 6] },
                        { loc: [6, 9] },
                        { loc: [12, 20] },
                    ]}
                />
            </Deck>
        );
    }
}
