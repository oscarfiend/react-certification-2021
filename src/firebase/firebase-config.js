import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBeupwCnetKwa7W81gIpY8WmKOVrP52cD0',
  authDomain: 'tutorial-firebase-ea333.firebaseapp.com',
  databaseURL: 'https://tutorial-firebase-ea333.firebaseio.com',
  projectId: 'tutorial-firebase-ea333',
  storageBucket: 'tutorial-firebase-ea333.appspot.com',
  messagingSenderId: '166869096241',
  appId: '1:166869096241:web:206af38029d559cfcd8210',
};

firebase.initializeApp(firebaseConfig);

export { firebase };
