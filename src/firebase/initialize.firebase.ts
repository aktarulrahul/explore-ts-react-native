import { initializeApp } from 'firebase/app';
import firebaseConfig from './config.firebase';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseInitialize = () => {
  initializeApp(firebaseConfig);
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default firebaseInitialize;
