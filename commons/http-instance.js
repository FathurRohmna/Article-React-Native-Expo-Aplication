import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://newsapi.org/v2/',
  withCredentials: false,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET' 
  }
})