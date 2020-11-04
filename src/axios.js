import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tinder-backend-powerful.herokuapp.com'
})

export default instance