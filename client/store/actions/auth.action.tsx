/* eslint-disable import/prefer-default-export */
import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  VERIFY_GOOGLE_TOKEN_SUCCESS,
  VERIFY_GOOGLE_TOKEN_FAILED,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  UPDATE_PROFILE,
  LOGOUT,
} from '../../constants/actions'

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
})

export const loginFailed = (error) => ({
  type: LOGIN_FAILED,
  payload: error,
})

export const verifyGoogleTokenSuccess = (user) => ({
  type: VERIFY_GOOGLE_TOKEN_SUCCESS,
  payload: user,
})

export const verifyGoogleTokenFailed = (error) => ({
  type: VERIFY_GOOGLE_TOKEN_FAILED,
  payload: error,
})

export const registerSuccess = (user) => ({
  type: REGISTER_SUCCESS,
  payload: user,
})

export const registerFailed = (error) => ({
  type: REGISTER_FAILED,
  payload: error,
})

export const getUserInfoSuccess = (user) => ({
  type: GET_USER_SUCCESS,
  payload: user,
})

export const getUserInfoFailed = (user) => ({
  type: GET_USER_FAILED,
  payload: user,
})

export const updateProfile = (user) => ({
  type: UPDATE_PROFILE,
  payload: user,
})

export const logout = () => ({
  type: LOGOUT,
})
