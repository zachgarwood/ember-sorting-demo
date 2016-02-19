import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  sortedReviews: Ember.computed.sort('reviews', 'sortDefinition'),
  sortBy: 'date', // default sort by date
  sortDefinition: Ember.computed('sortBy', function() {
    return [ this.get('sortBy') ];
  }),
});
