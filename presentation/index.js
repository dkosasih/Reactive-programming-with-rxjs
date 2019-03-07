// Import React
import React from 'react';

// Import Spectacle Core tags
import { Deck, Slide, Notes } from 'spectacle';

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
import MapOperators from './components/maps-compare.jsx';
import Multicast from './components/multicast.jsx';
import References from './components/References.jsx';
import Thanks from './components/Thankyou.jsx';

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
                    code={require('!!raw-loader!../assets/multicast-unicast.js')}
                    ranges={[
                        { loc: [1, 6] },
                        { loc: [7, 15] },
                        { loc: [16, 17] },
                        { loc: [18, 28] },
                        { loc: [29, 30] }
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
                    <HoO withFormula={true} />
                </Slide>
                <CodeSlide
                    notes={
                        <div>
                            👉 declare variable
                            <br />
                            👉 subscribing click event
                            <br />
                            👉 then setup the click even output and subscribing the interval
                            observable
                            <br />
                            👉 then output the value together
                            <br />
                            👉 but - can you start to see the callback hell pattern forming?
                            <br />
                        </div>
                    }
                    lang="ts"
                    bgColor="secondary"
                    title="higher-order observable - concept"
                    transition={[]}
                    code={require('!!raw-loader!../assets/higher-order-observable.ts')}
                    ranges={[{ loc: [0, 4] }, { loc: [5, 6] }, { loc: [6, 9] }, { loc: [12, 20] }]}
                />
                <CodeSlide
                    notes={
                        <div>
                            👉 declare variable
                            <br />
                            👉 mapping the click event to do something and return a new interval
                            observable
                            <br />
                            👉 then use mergeAll to merge the result
                            <br />
                            👉 then output the value together
                            <br />
                        </div>
                    }
                    lang="ts"
                    bgColor="secondary"
                    title="higher-order observable - mergeAll + map"
                    transition={[]}
                    code={require('!!raw-loader!../assets/mergeAll.ts')}
                    ranges={[{ loc: [0, 4] }, { loc: [5, 11] }, { loc: [13, 16] }]}
                />
                <CodeSlide
                    notes={
                        <div>
                            👉 declare variable
                            <br />
                            👉 instead of map and mergeAll separately - we combine both using
                            mergeMap
                            <br />
                            👉 then output the value together
                            <br />
                        </div>
                    }
                    lang="ts"
                    bgColor="secondary"
                    title="higher-order observable - mergeMap"
                    transition={[]}
                    code={require('!!raw-loader!../assets/mergeMap.ts')}
                    ranges={[{ loc: [0, 4] }, { loc: [6, 12] }, { loc: [13, 14] }]}
                />
                <Slide transition={['fade']} bgColor="primary">
                    <MapOperators />
                </Slide>

                <Slide transition={['fade']} bgColor="primary">
                    <Multicast />
                </Slide>
                <CodeSlide
                    notes={
                        <div>
                            👉 take the our old friend interval creator - this time we take 5 and reduce the interval so we
                            have enough time to play with
                            <br />
                            👉 Hot obs: multicast with Subject manually
                        </div>
                    }
                    lang="javascript"
                    bgColor="secondary"
                    title="Multicast with Subject"
                    transition={[]}
                    code={require('!!raw-loader!../assets/multicast.js')}
                    ranges={[{ loc: [4, 8] }, { loc: [9, 18] }]}
                />
                <CodeSlide
                    notes={
                        <div>
                            👉 to make it more readable and reducing orchestration - there is an
                            operator multicast <br />
                            connect
                        </div>
                    }
                    lang="javascript"
                    bgColor="secondary"
                    title="Multicast"
                    transition={[]}
                    code={require('!!raw-loader!../assets/multicast.js')}
                    ranges={[{ loc: [20, 28] }]}
                />
                <CodeSlide
                    notes={
                        <div>
                            👉 `publish` is a thin wrapper which call multicast and pass the Subject
                            along with it
                        </div>
                    }
                    lang="javascript"
                    bgColor="secondary"
                    title="publish"
                    transition={[]}
                    code={require('!!raw-loader!../assets/multicast.js')}
                    ranges={[{ loc: [30, 39] }]}
                />
                <CodeSlide
                    notes={
                        <div>
                            👉 let's will put refCount into play; we'll see how refCount differ
                            <br />
                            👉 publish operator with refCount() to connect the observable
                            automatically when first subscription is made - it will start emit, and
                            count up for the next. after that, if all subscription dropped of - it
                            will automatically unsubscribe and complete from the source
                            <br />
                            👉 now publish automatically pass in a subject and subscribe to it
                            <br />
                            let's have a look at share - it's a publish operator that passes
                            
                            <br />
                        </div>
                    }
                    lang="javascript"
                    bgColor="secondary"
                    title="Multicast"
                    transition={[]}
                    code={require('!!raw-loader!../assets/multicast.js')}
                    ranges={[{ loc: [43, 58] }, { loc: [60, 78] }]}
                />
                <CodeSlide
                    notes={
                        <div>
                            👉 Share is and operator that does publish and refCount together -
                            however share is using factory function under the hood to create new
                            subject everytime - which means if there is any subscription is made
                            after refCount drops to 0 - new subject will be created and perform a
                            new subscription to the observable
                        </div>
                    }
                    lang="javascript"
                    bgColor="secondary"
                    title="Multicast"
                    transition={[]}
                    code={require('!!raw-loader!../assets/multicast.js')}
                    ranges={[{ loc: [79, 89] }]}
                />

                <Slide transition={['fade']} bgColor="primary">
                    <References />
                </Slide>
                <Slide transition={['fade']} bgColor="primary">
                    <Thanks />
                </Slide>
            </Deck>
        );
    }
}
