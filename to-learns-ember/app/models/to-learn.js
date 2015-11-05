import DS from 'ember-data';

var ToLearn = DS.Model.extend({
  name: DS.attr('string'),
  completed: DS.attr('boolean')
});

ToLearn.reopenClass({
  FIXTURES: []
});

export default ToLearn
