import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default class MyOAuth extends OAuth2PasswordGrant {
  // Use the local Rails server to mock authentication for proof of concept.
  //  The Rails endpoint accepts username 'lewis' and password 'secret'.
  serverTokenEndpoint = 'http://localhost:3000/mock-auth/token';

  // No need to revoke tokens for this proof of concept.
  serverTokenRevocationEndpoint = null;
}
