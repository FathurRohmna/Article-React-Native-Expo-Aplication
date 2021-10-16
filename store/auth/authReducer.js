import { 
  USER_LOGIN, 
  USER_LOGIN_SUCCESS, 
  USER_REGISTER, 
  USER_REGISTER_SUCCESS, 
  USER_LOGOUT, 
  USER_AUTH_FAIL 
} from './typesAuth'

const initialState = {
  isLoading: false,
  isLoaded: false,
  user: null,
  error: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN || USER_REGISTER:
      return {
        ...state,
        isLoading: true
      }
    case USER_LOGIN_SUCCESS || USER_REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        user: action.payload,
        error: null
      }
    case USER_AUTH_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        error: action.payload
      }
    default:
      return state
  }
}

export default authReducer
