
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth" 
import {doc, getDoc, getFirestore, setDoc} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDJgPy8tUGw4HCVUMPyPS3ej8UmReVT-yo",
  authDomain: "react-shop-2f085.firebaseapp.com",
  projectId: "react-shop-2f085",
  storageBucket: "react-shop-2f085.appspot.com",
  messagingSenderId: "453665097923",
  appId: "1:453665097923:web:836c10400235e101b37a76"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

const db = getFirestore(); 

export const createUserDataFromAuth = async(authData) => {
    const userRefData = doc(db, "users", authData.uid )
    
    const userSnapshot = await getDoc(userRefData) //snapshot to check if the user exists or not
    
    if(!userSnapshot.exists()) {
        const {displayName, email} = authData
        const createdAt = new Date()

        try {
            await setDoc(userRefData, {displayName, email, createdAt})
        } catch(error){
            console.log("There has been an error", error.message)
        }
    }

    return userRefData

}



