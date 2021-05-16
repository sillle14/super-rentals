import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  // Expects the Rails API running locally at port 3000.
  host = 'http://localhost:3000';
}
