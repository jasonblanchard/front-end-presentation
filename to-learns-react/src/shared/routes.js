import React from 'react';
import { IndexRoute, Route } from 'react-router';
import RootContainer from 'app/shared/containers/RootContainer';
import AboutContainer from 'app/shared/containers/AboutContainer';
import NoMatch from 'app/shared/containers/NoMatch';
import ToLearnsContainer from 'app/shared/containers/ToLearnsContainer';

export default (
  <Route path="/" component={RootContainer}>
    <Route path="/about" activeClass="active" component={AboutContainer} />
    <Route path="/to-learns" component={ToLearnsContainer} />
    <IndexRoute component={ToLearnsContainer} />
    <Route path="*" component={NoMatch}/>
  </Route>
);
