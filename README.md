# super-rentals

The Ember.js [tutorial](https://guides.emberjs.com/release/tutorial/part-1/) application, with a Rails backend.
Beyond the tutorial, I've implemented basic authentication and pages to create and edit rental listings.

## Running the App

Run the app with `ember serve`. Note that this relies on the Rails application also running locally at port 3000.
See the Rails app [here](https://github.com/sillle14/super-rentals-api).

## Authentication

Authentication is via [Ember Simple Auth](https://github.com/simplabs/ember-simple-auth) and hits a mock authentication
endpoint on the Rails server. Use username `lewis` and password `secret`.
