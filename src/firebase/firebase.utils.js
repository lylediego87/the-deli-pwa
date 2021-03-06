import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCSMCKDMpSAdTj79kwexeFXmo5j7KeH_78",
  authDomain: "the-deli-8452a.firebaseapp.com",
  projectId: "the-deli-8452a",
  storageBucket: "the-deli-8452a.appspot.com",
  messagingSenderId: "572397137876",
  appId: "1:572397137876:web:7d713362948d2c40c8b041",
  measurementId: "G-J8RFHYMRB1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider  = new firebase.auth.FacebookAuthProvider();

googleProvider.setCustomParameters({prompt: 'select_account'});
facebookProvider.setCustomParameters({propmt: 'select_account'});

export const GoogleSignIn = () => auth.signInWithPopup(googleProvider);
export const FacebookSignIn = () => auth.signInWithPopup(facebookProvider);

export const getCurrentUser = () => {
  return new Promise((reslove, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      reslove(userAuth);
    },reject)
  })
}

export const createOrder = (order) => {
  try {
    firestore.collection('orders').add(order);
  } catch (error) {
    console.log("error creating order", error.message);
  }
}

export const transformItems = items => items.docs.map(doc => {
  const {name, description, price, place, category } = doc.data();

  return {
    id: doc.id,
    name: name,
    description: description,
    price: price,
    place: place,
    category: category
  }
});

export default firebase;
