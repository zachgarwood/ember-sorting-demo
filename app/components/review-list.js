import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  sortedReviews: Ember.computed.sort('reviews', 'sortDefinition'),
  sortBy: 'date', // default sort by date
  reverseSort: false, //default sort in ascending order
  sortDefinition: Ember.computed('sortBy', 'reverseSort', function() {
    let sortOrder = this.get('reverseSort') ? 'desc' : 'asc';
    return [ `${this.get('sortBy')}:${sortOrder}` ];
  }),
});
