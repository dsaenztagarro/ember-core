import Ember from 'ember';

export default Ember.Object.extend({
  init() {
    if (this.get('namespace') === undefined) {
      throw 'MandatoryAttributeError: namespace';
    }
  },

  /**
   * Transition the application into another route in the scope of the client
   * application.
   *
   * @method transitionToRoute
   * @public
   */
  transitionTo() {
    var ctrl = this.get('router');
    var args = Array.prototype.slice.call(arguments);
    var routeName = this.get('namespace') + '.' + args.shift();
    args.splice(0, 0, routeName);
    return ctrl.transitionTo.apply(ctrl, args);
  }
});
