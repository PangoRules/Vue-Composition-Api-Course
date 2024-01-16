import { defineStore } from 'pinia';
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from '@/js/firebase';

export const useStoreAuth = defineStore('storeAuth', {
  state: () => ({ 

	}),

	actions: {
		registerUser(credentials){
			createUserWithEmailAndPassword(auth, credentials.email, credentials.password).then((userCredential) => {
				const user = userCredential.user;
				console.log("🚀 ~ createUserWithEmailAndPassword ~ user:", user);
			})
			.catch((error) => {
				console.log("🚀 ~ registerUser ~ error.message:", error.message);
			});
		},

		logInUser(credentials){
			signInWithEmailAndPassword(auth, credentials.email, credentials.password)
			.then((userCredential) => {
				// Signed in 
				const user = userCredential.user;
				console.log("🚀 ~ user logged in ~ user:", user)
			})
			.catch((error) => {
				console.log("🚀 ~ logInUser ~ error.message:", error.message)
			});
		},

		logOutUser(){
			signOut(auth).then(() => {
				// Sign-out successful.
				console.log('User logged out');
			}).catch((error) => {
				console.log("🚀 ~ signOut ~ error.message:", error.message)
				// An error happened.
			});
		}
	},
})