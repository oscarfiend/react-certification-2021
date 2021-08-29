import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APY_KEY_FIREBASE,
  authDomain: process.env.REACT_APP_AUTHDOMAIN_FIREBASE,
  databaseURL: process.env.REACT_APP_DATABASEURL_FIREBASE,
  projectId: process.env.REACT_APP_PROJECTID_FIREBASE,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET_FIREBASE,
  messagingSenderId: process.env.REACT_APP_MESAGINSENDER_FIREBASE,
  appId: process.env.REACT_APP_APPID_FIREBASE,
};

firebase.initializeApp(firebaseConfig);

export { firebase };
