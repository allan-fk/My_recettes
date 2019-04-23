import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOM,
    databaseURL: process.env.REACT_APP_DB_URL
  }),
  base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
