import {auth} from "../../../adapters/firebase"
import {
    FIREBASE_GET_USER_REQUEST,
    FIREBASE_GET_USER_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS, LOGOUT_REQUEST, LOGOUT_SUCCESS
} from "../const";


const requestFirebaseGetUser = () => ({type: FIREBASE_GET_USER_REQUEST})
const successFirebaseGetUser = (user) => ({
    type: FIREBASE_GET_USER_SUCCESS,
    payload: {user}
})

const requestSignIn = () => ({type: LOGIN_REQUEST})
const successSignIn = (claims) => ({
    payload: {claims},
    type: LOGIN_SUCCESS,
})
const failureSignIn = (error) => ({type: LOGIN_FAILURE, payload: {error}})


const requestSignOut = () => ({type: LOGOUT_REQUEST})
const successSignOut = () => ({type: LOGOUT_SUCCESS})


export const firebaseGetUser = () => async (dispatch) => {
    dispatch(requestFirebaseGetUser())

    await auth.onAuthStateChanged(async (user) => {
        if (user) {
            dispatch(successFirebaseGetUser(user))
        } else {
                dispatch(signOut())
                window.location.href = "/login"
        }
    })
}

export const signIn = (body) => async (dispatch) => {
    dispatch(requestSignIn())

    try {
        const credentials = await auth.signInWithEmailAndPassword(body.email, body.password)

        auth.currentUser.getIdTokenResult()
            .then((result) => {
                dispatch(successSignIn(result.claims))
            })
    } catch (e) {
            dispatch(failureSignIn("Unexpected login error"))
        throw Error()
    }
}

export const signOut = () => async (dispatch) => {
    dispatch(requestSignOut())

    auth.signOut()
    dispatch(successSignOut())
}

export const resetPasswordByEmail = (email) => auth.sendPasswordResetEmail(email)

