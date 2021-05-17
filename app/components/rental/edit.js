import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class RentalEditComponent extends Component {
  constructor(...args) {
    super(...args);
    let { rental } = this.args;
    // Fix the title at the start so it doesn't change as the user fills the form.
    this.staticTitle = rental.title;
  }

  @action save() {
    let { rental } = this.args;
    rental
      .save()
      .then(() => {
        // Reset the title on success.
        this.staticTitle = rental.title;
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
