import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class RentalCreateComponent extends Component {
  @tracked loading = false;
  @service router;

  @action save() {
    let { rental } = this.args;
    this.loading = true;
    // rental.id = this.slugify(rental.title);
    rental
      .save()
      .then(() => {
        this.staticTitle = rental.title;
        this.loading = false;
        // TODO: Send to the listing page on successful creation
      })
      .catch((e) => {
        this.loading = false;
        console.log(e);
      });
  }

  @action cancel() {
    let { rental } = this.args;
    rental.rollbackAttributes();
  }
}
