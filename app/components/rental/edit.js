import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class RentalEditComponent extends Component {
  @service router;
  @tracked staticTitle;

  constructor(...args) {
    super(...args);
    let { rental } = this.args;
    // Fix the title at the start so it doesn't change as the user fills the form.
    this.staticTitle = rental.title;
  }

  @action save() {
    let { rental } = this.args;
    // TODO: Handle updating slug.
    rental
      .save()
      .then(() => {
        this.router.transitionTo('rental', rental);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  @action cancel() {
    let { rental } = this.args;
    rental.rollbackAttributes();
    this.router.transitionTo('rental', rental);
  }
}
