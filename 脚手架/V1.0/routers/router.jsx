import React from 'react';
import {Route,IndexRoute} from 'react-router';

// components
import App from '../containers/App'
import {Main,Table,Welcome,ErrorPage,Main1} from '../modules'

export default function getRoutes() {
  const Add = Main1.Add;
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Welcome}/>
      <Route path="test2" component={Main}/>
      <Route path="test3" component={Table}/>
      <Route path="test4" component={Add}/>
      <Route path="*" component={ErrorPage}/>
    </Route>
  );
}


