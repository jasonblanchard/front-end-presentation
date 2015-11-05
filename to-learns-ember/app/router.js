import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('to-learns', {path: '/to-learns'}, function() {

  });
  this.route('to-learns', function() {});
});

export default Router;
