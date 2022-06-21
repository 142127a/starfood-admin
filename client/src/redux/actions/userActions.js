import {

  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_FAIL,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,

} from "../constants/userConstants";
import {

  signInWithEmailAndPassword,
  signOut,

} from "firebase/auth";

import { auth} from "../../firebase";
// login user action
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const res = await signInWithEmailAndPassword(auth, email, password);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: res.user,
    });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
// logout user action
export const logOut = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGOUT_REQUEST,
    });

    await signOut(auth);

    dispatch({
      type: USER_LOGOUT_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: USER_LOGOUT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
