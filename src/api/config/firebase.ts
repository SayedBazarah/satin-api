// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

import { env } from './env';


const firebaseConfig = env.firebase;

// Initialize Firebase
const fbapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(fbapp);

export {fbapp, analytics};