import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyADpYihdiDcLA3OenBvHe2bOSxdkQwSXkI",
  authDomain: "e-library-76dcd.firebaseapp.com",
  projectId: "e-library-76dcd",
  storageBucket: "e-library-76dcd.appspot.com",
  messagingSenderId: "66999934094",
  appId: "1:66999934094:web:c9e9528ca691f2d2be3ddf",
  measurementId: "G-67B142EHMB"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
