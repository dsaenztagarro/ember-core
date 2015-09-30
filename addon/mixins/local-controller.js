import Ember from 'ember';

export default Ember.Mixin.create({
  transitionToRouteLocal(routeName) {
    this.transitionToRoute(this.clientNamespace() + routeName);
  },
  clientNamespace() {
    throw 'NotImplementedError';
  },
});
