import {getFirestore, doc, setDoc,
	/* Collection, addDoc, */ getDoc} from 'firebase/firestore';
// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {
	getAuth,
	GoogleAuthProvider /* signInWithPopup, signInWithEmailAndPassword */,
} from 'firebase/auth';
// Import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBgOyADT5xxprMRhcR454Nv_vWgtHhs9c0',
	authDomain: 'm-pack.firebaseapp.com',
	projectId: 'm-pack',
	storageBucket: 'm-pack.appspot.com',
	messagingSenderId: '703325915795',
	appId: '1:703325915795:web:fe5736139d27c8d7e19b66',
	measurementId: 'G-62HKXW5C23',
};

const app = initializeApp(firebaseConfig);
// Const analytics = getAnalytics(app);

// Initialize Firebase
export const auth = getAuth(app);
export const firestore = getFirestore();
export const googleProvider = new GoogleAuthProvider();

export const generateUserDocument = async (user, additionalData) => {
	const docRef = doc(firestore, 'users', user.uid);
	const docSnap = await getDoc(docRef);
	if (!docSnap.exists()) {
		const {displayName, firstName, lastName} = additionalData;
		try {
			await setDoc(docRef, {
				email: user.email,
				photoURL: user.photoURL || null,
				displayName: displayName || null,
				firstName: firstName || null,
				lastName: lastName || null,
			});
		} catch (e) {
			console.error('Error adding document: ', e);
		}
	}

	return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
	if (!uid) {
		return null;
	}

	try {
		const docRef = doc(firestore, 'users', uid);
		const docSnap = await getDoc(docRef);
		return {
			uid,
			...docSnap.data(),
		};
	} catch (error) {
		console.error('Error fetching user', error);
	}
};
