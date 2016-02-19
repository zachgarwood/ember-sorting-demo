import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('date'),
  product: DS.belongsTo('product'),
  rating: DS.attr('number'), // score out of 5
  text: DS.attr('string'),
  title: DS.attr('string'),
  username: DS.attr('string'),
});
