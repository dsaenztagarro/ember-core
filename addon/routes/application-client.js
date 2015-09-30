import ClientRoute from 'ember-core/routes/client';

export default ClientRoute.extend({
  actions: {
    selectTab(tab) {
      this.transitionTo(tab.routeName);
    },
  }
});
