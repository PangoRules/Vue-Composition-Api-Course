import { defineStore } from 'pinia';
import { createUserWithEmailAndPassword } from "firebase/auth";
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
			console.log('login user', credentials);
		},
	},
})