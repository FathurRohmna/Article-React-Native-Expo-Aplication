import axios from 'axios'

const PREFIX = 'http://localhost:8080/authentication'

export const userRegisterApi = (data) => axios.post(`${PREFIX}/register`, data).catch(function (error) {
  if (error) {
    return error
  }
})

export const userLoginApi = (data) => axios.post(`${PREFIX}/login`, data).catch(function (error) {
  if (error) {
    return error
  }
})
