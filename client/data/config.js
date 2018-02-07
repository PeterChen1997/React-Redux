import Raven from 'raven-js';

const sentry_key = '9cfaae0a430042fdb982c1a53f52e224';
const sentry_app = '282675';
export const sentry_url = `https://${sentry_key}@sentry.io/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
