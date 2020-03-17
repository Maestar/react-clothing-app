import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//if you cloned this you will need to replace this config with a different one from your own firebase!
const config =  {
    apiKey: "AIzaSyBYuiuFdKlhA2U771OOQZqK-jrqLuet48Y",
    authDomain: "crwn-clothing-db-6508a.firebaseapp.com",
    databaseURL: "https://crwn-clothing-db-6508a.firebaseio.com",
    projectId: "crwn-clothing-db-6508a",
    storageBucket: "crwn-clothing-db-6508a.appspot.com",
    messagingSenderId: "745128296083",
    appId: "1:745128296083:web:557a4049676f6c4eef9766"
  };

  //asynchronus action, because we're calling an API which is always asynchronous
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    //CRUD methods have to be used with the user reference, they cannot be used
    //with the snapshot! snapshot just tells you if data exists in firebase.
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShop = await userRef.get();
    
    if(!snapShop.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch (error){
            console.log('error creating user', error.message);
        }
    }
    
    return userRef;
  }

  firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

//setting up google authentication

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
