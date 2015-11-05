import Ember from 'ember';

export default Ember.Controller.extend({
  newName: '',

  actions: {
    createToLearn: function() {
      var name = this.get('newName');

      var toLearn = this.store.createRecord('to-learn', {
        name: name,
        completed: false
      });

      this.set('newName', '');

      toLearn.save();
    }
  }
});
