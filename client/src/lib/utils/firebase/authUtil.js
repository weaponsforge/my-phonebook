import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@/utils/firebase/config'

export default class AuthUtil {
    // default config, update as needed
    static config = {
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        auth: auth,
    }

    // methods
    static signUp = async (email, password) => {
        this.config.createUserWithEmailAndPassword(this.config.auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    static signIn = async (email,password) => {
        this.config.signInWithEmailAndPassword(this.config.auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
}

