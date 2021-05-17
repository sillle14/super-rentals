import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class RentalCreateComponent extends Component {
  @service router;

  @action save() {
    let { rental } = this.args;
    rental
      .save()
      .then(() => {
        this.router.transitionTo('rental', rental);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  @action back() {
    let { rental } = this.args;
    rental.rollbackAttributes();
    this.router.transitionTo('index');
  }

  @action cancel() {
    // Clear each attribute.
    // Note that rollback will mark the object as isDeleted, which is not
    //  the goal here.
    let { rental } = this.args;
    rental.eachAttribute((name) => {
      rental[name] = null;
    });
  }
}
