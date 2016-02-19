import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.attr('string'),
  reviews: DS.hasMany('review'),
  title: DS.attr('string'),
});
