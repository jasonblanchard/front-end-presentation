import Ember from 'ember';

export default Ember.ArrayController.extend({
  toLearns: function() {
    return this.store.find('to-learn');
  }.property(),

  total: function() {
    return this.get('toLearns').get('length');
  }.property('toLearns.length'),

  completed: function() {
    return this.get('toLearns').filterBy('completed', true).get('length');
  }.property('toLearns.@each.completed'),

  uncompleted: function() {
    return this.get('toLearns').filterBy('completed', false).get('length');
  }.property('toLearns.@each.completed'),

  actions: {
    completeToLearn: function() {
      console.log('completed');
    },

    removeToLearn: function(id) {
      var toLearn = this.store.find('toLearn', id).then(function(toLearn) {
        toLearn.deleteRecord();
      });
    }
  }
});
