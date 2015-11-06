import Ember from 'ember';

export default Ember.Controller.extend({
  newName: '',

  error: '',

  characterCount: function() {
    return 140 - this.get('newName').length;
  }.property('newName'),

  isInValidInput: function() {
    var count = this.get('characterCount');
    return (count < 0) || (count >= 140);
  }.property('characterCount'),

  actions: {
    createToLearn: function() {
      var name = this.get('newName');

      this.set('error', '');

      if (this.get('isInValidInput')) {
        this.set('error', 'Enter a valid thing to learn');
      } else {
        this.store.createRecord('to-learn', {
          name: name,
          completed: false
        }).save();
        this.set('newName', '');
      }
    }
  }
});
