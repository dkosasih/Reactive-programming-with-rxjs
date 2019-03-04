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
  Text, Appear
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import Title from './components/title-slide.jsx';
import WhatIs from './components/what.jsx';
import Why from './components/why.jsx';

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
      <Deck
        transition={['fade']}
        transitionDuration={500}
        theme={theme}
      >
        <Title></Title>
        <Slide transition={['fade']} bgColor="primary">
          <WhatIs></WhatIs>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Why></Why>
        </Slide>
      </Deck>
    );
  }
}
