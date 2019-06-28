import React from 'react';

import HtmlHead from '../components/HtmlHead';
import Navigation from '../components/Navigation';


const IndexPage = () => [
  <HtmlHead title="Joseph Niel's Personal Page" />,
  <div>
    <Navigation />
    Hello world!
  </div>
];

export default IndexPage;
