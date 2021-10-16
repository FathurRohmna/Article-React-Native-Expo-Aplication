import { 
  USER_LOGIN, 
  USER_LOGIN_SUCCESS, 
  USER_REGISTER, 
  USER_REGISTER_SUCCESS, 
  USER_LOGOUT, 
  USER_AUTH_FAIL 
} from './typesAuth'

export const userLogin = () => ({
  type: USER_LOGIN
})

export const userLoginSuccess = (payload) => ({
  type: USER_LOGIN_SUCCESS,
  payload
})

export const userRegister = () => ({
  type: USER_REGISTER
})

export const userRegisterSuccess = (payload) => ({
  type: USER_REGISTER_SUCCESS,
  payload
}) 

export const userLogout = () => ({
  type: USER_LOGOUT
})

export const userAuthFail = (payload) => ({
  type: USER_AUTH_FAIL,
  payload
})
