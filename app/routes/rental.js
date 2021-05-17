import AuthenticatedRoute from './authenticated';
import { inject as service } from '@ember/service';

export default class RentalRoute extends AuthenticatedRoute {
  @service store;

  async model(params) {
    return this.store.findRecord('rental', params.rental_id);
  }
}
