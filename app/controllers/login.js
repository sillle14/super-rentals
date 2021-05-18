import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class LoginController extends Controller {
  @tracked errorMessage;
  @service session;

  @action
  async authenticate(e) {
    e.preventDefault();
    let { identification, password } = this;
    try {
      await this.session.authenticate(
        'authenticator:oauth2',
        identification,
        password
      );
      // If the user authenticates, they will be automatically redirected
      //  to the home page based on the route.
    } catch (error) {
      console.log(error);
      this.errorMessage = error.error || error;
    }
  }

  @action
  updateIdentification(e) {
    this.identification = e.target.value;
  }

  @action
  updatePassword(e) {
    this.password = e.target.value;
  }
}
