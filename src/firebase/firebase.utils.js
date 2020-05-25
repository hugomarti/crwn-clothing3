import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAEx_2MDJIj0PcpK54drY2mFKK3B4DXAhY",
  authDomain: "crwn-db2-2ff57.firebaseapp.com",
  databaseURL: "https://crwn-db2-2ff57.firebaseio.com",
  projectId: "crwn-db2-2ff57",
  storageBucket: "crwn-db2-2ff57.appspot.com",
  messagingSenderId: "575932337647",
  appId: "1:575932337647:web:090d95809ef3b91b29ba1a",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating the user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
