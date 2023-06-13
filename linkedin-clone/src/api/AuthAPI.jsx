import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';

let auth = getAuth()

export const LoginAPI = (email,  password) => {
    try {
        signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        return err;
    }
};
