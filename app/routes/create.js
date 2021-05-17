import AuthenticatedRoute from './authenticated';
import { inject as service } from '@ember/service';

export default class CreateRoute extends AuthenticatedRoute {
  @service store;

  async model() {
    return this.store.createRecord('rental');
  }
}
