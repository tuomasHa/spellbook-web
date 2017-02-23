import React from 'react';
import {Router, Route, indexRoute, hashHistory} from 'react-router';
import App from '../App';
import CastPage from '../CastPage';
import EditPage from '../EditPage';
import PreparePage from '../PreparePage';

const routes = {
  path: '/',
  component: App,
  indexRoute: { onEnter: (nextState, replace) => replace('/cast') },
  childRoutes: [
    { path: '/cast', component: CastPage },
    { path: '/edit', component: EditPage },
    { path: '/prepare', component: PreparePage }
  ]
};

export default () => {
    return <div className='app-frame'>
      <Router routes={routes} history={hashHistory} />
    </div>;
}
