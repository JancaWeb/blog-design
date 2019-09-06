import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { Header } from './Header';
import { HomePage } from './HomePage';
import { Blog } from './Blog';
import { Instagram } from './Instagram';
import { Contacts } from './Contacts';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Andika&display=swap');
    font-family: 'Andika', sans-serif;
    font-size: 16px;
    margin: 0;
  }

  p {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

export const App = () => (
  <div> 
    <GlobalStyles />
    <Header />
    <HomePage />
    <Blog />
    <Instagram />
    <Contacts />
  </div>
)
