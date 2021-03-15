
//import * as firebase from 'firebase/app'

//import * as firebase from 'firebase';
//import firebase from 'firebase/app';
//import 'firebase/firestore';
//import '@firebase/auth'
//import '@firebase/firestore'

// const firebaseConfig ={
//     apiKey: 'AIzaSyDVJQYammuQEpH-LTIk9Iuv_a_lFC-xG40',
//     authDomain: 'reactnative-assignment-project',
//     databaseURL: 'https://your-database-name.firebaseio.com',
//     projectId: 'reactnative-assignment-project',
//     storageBucket: 'reactnative-assignment-project.appspot.com',
//     messagingSenderId: '853484137335',
//     appId: '1:853484137335:android:e4319af6e7bf553db74f72',
//   };
import firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig ={
   apiKey: 'AIzaSyDVJQYammuQEpH-LTIk9Iuv_a_lFC-xG40',
    authDomain: 'reactnative-assignment-project.firebaseapp.com',
databaseURL: 'https://your-database-name.firebaseio.com',
    projectId: 'reactnative-assignment-project',
    storageBucket: 'reactnative-assignment-project.appspot.com',
    messagingSenderId: '853484137335',
   appId: '1:853484137335:android:e4319af6e7bf553db74f72',
};

  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () =>{ auth.signInWithPopup(provider);
  }

  const provider1 = new firebase.auth.FacebookAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithFacebook= () => auth.signInWithPopup(provider1);



  export {firebase};