import Ember from 'ember';

export default Ember.ArrayController.extend({
  toLearns: Ember.computed.alias('model'),

  total: function() {
    return this.get('toLearns').get('length');
  }.property('toLearns.length'),

  completed: function() {
    return this.get('model').filterBy('completed', true).get('length');
  }.property('toLearns.@each.completed'),

  uncompleted: function() {
    return this.get('model').filterBy('completed', false).get('length');
  }.property('toLearns.@each.completed'),

  actions: {
    completeToLearn: function() {
      console.log('completed');
    }
  }
});
