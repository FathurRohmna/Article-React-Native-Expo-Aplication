import * as authAction from './authActions'
import { userLoginApi, userRegisterApi } from './apiService'

export const signupUser = (userData) => async (dispatch) => {
  try {
    dispatch(authAction.userRegister())

    const response = await userRegisterApi(userData)

    if (response.response) {
      dispatch(authAction.userAuthFail(response.response.data))
    } else {
      dispatch(authAction.userRegisterSuccess(response.data.user))
    }
    
  } catch (error) {
    dispatch(authAction.userAuthFail(error.message))
  }
}

export const signinUser = (userData) => async (dispatch) => {
  try {
    dispatch(authAction.userLogin())

    const response = await userLoginApi(userData)

    if (response.response) {
      dispatch(authAction.userAuthFail(response.response.data))
    } else {
      dispatch(authAction.userLoginSuccess(response.data))
    }
  } catch (error) {
    dispatch(authAction.userAuthFail(error.message))
  }
}
