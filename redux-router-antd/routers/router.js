import React from 'react';
import {Route,IndexRoute} from 'react-router';

// components
import App from '../containers/App'
import {Main,Table,Welcome,ErrorPage} from '../components'

export default function getRoutes() {
  return (
    <Route path="/" component={App}>
    	<IndexRoute component={Welcome}/>
      <Route path="test2" component={Main}/>
      <Route path="test3" component={Table}/>
      <Route path="*" component={ErrorPage}/>
    </Route>
  );
}


