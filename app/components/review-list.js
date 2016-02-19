import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  sortedReviews: Ember.computed.sort('reviews', 'sortDefinition'),
  sortDefinition: ['date'],
});
