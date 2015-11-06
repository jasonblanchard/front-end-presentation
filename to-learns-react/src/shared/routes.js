import React from 'react';
import { IndexRoute, Route } from 'react-router';
import RootContainer from 'app/shared/containers/RootContainer';
import AboutContainer from 'app/shared/containers/AboutContainer';
import ExampleContainer from 'app/shared/containers/ExampleContainer';
import NoMatch from 'app/shared/containers/NoMatch';
import ToLearnsContainer from 'app/shared/containers/ToLearnsContainer';

export default (
  <Route path="/" component={RootContainer}>
    <Route path="/about" component={AboutContainer} />
    <Route path="/to-learns" component={ToLearnsContainer} />
    <IndexRoute component={ExampleContainer} />
    <Route path="*" component={NoMatch}/>
  </Route>
);
