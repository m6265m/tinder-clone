import axios from 'axios'

const instance = axios.create({
    // baseURL: 'http://localhost:8001'
    baseURL: 'https://tinder-backend-powerful.herokuapp.com'
})

export default instance