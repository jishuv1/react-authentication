import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC_jupVF7Uy3gKn8b6vCjjRbHIYvLlVpcs',
  authDomain: 'react-auth-bf41c.firebaseapp.com',
  projectId: 'react-auth-bf41c',
  storageBucket: 'react-auth-bf41c.appspot.com',
  messagingSenderId: '895200013061',
  appId: '1:895200013061:web:c404632f681b5331a0256c',
  measurementId: 'G-W418KR9FT9',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
