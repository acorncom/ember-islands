import Ember from 'ember';

export default Ember.Component.extend({
  isExpanded: false,
  classNameBindings: [':nested-component'],

  actions: {
    nestedAction: function() {
      this.sendAction('nestedAction');
    }
  }
});
