import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class RentalEditComponent extends Component {
  @tracked staticTitle;
  @tracked loading = false;

  constructor(...args) {
    super(...args);
    let { rental } = this.args;
    // Fix the title at the start so it doesn't change as the user fills the form.
    this.staticTitle = rental.title;
  }

  @action save() {
    // TODO: Enable editing the slug.
    let { rental } = this.args;
    this.loading = true;
    rental
      .save()
      .then(() => {
        this.staticTitle = rental.title;
        this.loading = false;
      })
      .catch((e) => {
        console.log(e);
      });
  }

  @action cancel() {
    let { rental } = this.args;
    rental.rollbackAttributes();
  }
}
