import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class LoginRoute extends Route {
  @service session;

  // This ensures that logged in users are automatically directed to the home page.
  beforeModel() {
    this.session.prohibitAuthentication('index');
  }
}