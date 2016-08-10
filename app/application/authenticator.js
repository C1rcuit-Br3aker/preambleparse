import Loopback from 'ember-simple-auth-loopback/authenticators/loopback';
import config from 'preambleparse/config/environment';

export default Loopback.extend({
  loginEndpoint: `${config.apiHost}/api/end-users/login?include=user`,
});
