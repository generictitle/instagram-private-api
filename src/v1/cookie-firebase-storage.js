var util = require("util");
var FirebaseCookieStore = require('tough-cookie-firebasestore');
const CookieStorage = require('./cookie-storage');

class CookieFirebaseStorage extends CookieStorage {
  constructor (app,firebasePath) {
    super(new FirebaseCookieStore(app,firebasePath));
  }

  destroy () {}
}

module.exports = CookieFirebaseStorage;
