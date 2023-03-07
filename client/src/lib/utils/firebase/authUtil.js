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
    try {
      const response = await this.config.createUserWithEmailAndPassword(this.config.auth, email, password)
      const user = response.user
      return user
    } catch (error) {
      const errorCode = error.code
      const errorMessage = error.message
      return {errorCode, errorMessage}
    }
  }

  static signIn = async (email,password) => {
    try {
      const response = await this.config.signInWithEmailAndPassword(this.config.auth, email, password)
      const user = response.user
      return user
    } catch (error) {
      const errorCode = error.code
      const errorMessage = error.message
      return {errorCode, errorMessage}
    }
  }

    
}

