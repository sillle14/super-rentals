import Ember from 'ember';
import { registerDeprecationHandler } from '@ember/debug';

export function initialize() {
  // Hide some deprecation errors from the form package to reduce clutter in the logs.
  registerDeprecationHandler((message, options, next) => {
    if (
      options &&
      options.id &&
      (options.id === 'this-property-fallback' ||
        options.id === 'ember-metal.get-with-default')
    ) {
      return;
    } else {
      next(message, options);
    }
  });
}

export default { initialize };
