import React from 'react';
import {render} from 'react-dom';
import Routing from './components/Routing';
require('./root.scss');

const root = document.body.appendChild(document.createElement('div'));

render(
  <Routing />,
  root
);
