import Component from '@glimmer/component';

// The search bar will consider all of the following to match during search.
const SEARCH_FIELDS = ['title', 'city', 'category', 'description', 'type'];

export default class RentalsFilterComponent extends Component {
  get results() {
    let { rentals, query } = this.args;

    if (query) {
      rentals = rentals.filter((rental) =>
        SEARCH_FIELDS.some((field) =>
          rental[field].toLowerCase().includes(query.toLowerCase())
        )
      );
    }

    return rentals;
  }
}
