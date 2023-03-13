import axios from 'axios'

const {
    VITE_REST_API_HOST, 
    VITE_REST_API_PORT
} = import.meta.env

const baseURL = `${VITE_REST_API_HOST}:${VITE_REST_API_PORT}/api`
console.log(` NODE_ENV => ${process.env.NODE_ENV} , baseURL => ${baseURL}` );

axios.defaults.baseURL = baseURL;


export default axios