import AuthenticatedRoute from './authenticated';
import { inject as service } from '@ember/service';

export default class IndexRoute extends AuthenticatedRoute {
  @service store;

  async model() {
    return this.store.findAll('rental');
  }
}
