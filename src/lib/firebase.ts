// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDXuxcotYxTTETE8qgqOyG8PHWZQThgKQc',
	authDomain: 'url-lengthener-249f0.firebaseapp.com',
	projectId: 'url-lengthener-249f0',
	storageBucket: 'url-lengthener-249f0.appspot.com',
	messagingSenderId: '831801085364',
	appId: '1:831801085364:web:f90171d62bd6783ca2f6e1'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
