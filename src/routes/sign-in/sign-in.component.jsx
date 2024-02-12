import '../sign-in/sign-in.component.style.scss'
import {signInWithGooglePopup, createUserDataFromAuth, auth} from '../../utils/firebase.utils.js'

const SignIn = () => {
    const logGoogleUser = async () => {
        const authData = await signInWithGooglePopup()
        
        createUserDataFromAuth(authData.user)
    }

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google
            </button>
        </div>
    )
}

export default SignIn;
