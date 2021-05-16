export default function () {
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  this.urlPrefix = 'http://localhost:3000'; // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */

  this.get('/rentals', () => {
    return {
      data: [
        {
          type: 'rentals',
          id: 'grand-old-mansion',
          attributes: {
            title: 'Grand Old Mansion',
            owner: 'Veruca Salt',
            city: 'San Francisco',
            lat: 37.7749,
            lng: -122.4194,
            category: 'Estate',
            bedrooms: 15,
            image:
              'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
            description:
              'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.',
          },
        },
        {
          type: 'rentals',
          id: 'urban-living',
          attributes: {
            title: 'Urban Living',
            owner: 'Mike Teavee',
            city: 'Seattle',
            lat: 47.6062,
            lng: -122.3321,
            category: 'Condo',
            bedrooms: 1,
            image:
              'https://upload.wikimedia.org/wikipedia/commons/2/20/Seattle_-_Barnes_and_Bell_Buildings.jpg',
            description:
              'A commuters dream. This rental is within walking distance of 2 bus stops and the Metro.',
          },
        },
        {
          type: 'rentals',
          id: 'downtown-charm',
          attributes: {
            title: 'Downtown Charm',
            owner: 'Violet Beauregarde',
            city: 'Portland',
            lat: 45.5175,
            lng: -122.6801,
            category: 'Apartment',
            bedrooms: 3,
            image:
              'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
            description:
              'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.',
          },
        },
      ],
    };
  });

  this.get('/rentals/grand-old-mansion', () => {
    return {
      data: {
        type: 'rentals',
        id: 'grand-old-mansion',
        attributes: {
          title: 'Grand Old Mansion',
          owner: 'Veruca Salt',
          city: 'San Francisco',
          lat: 37.7749,
          lng: -122.4194,
          category: 'Estate',
          bedrooms: 15,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
          description:
            'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.',
        },
      },
    };
  });
}
