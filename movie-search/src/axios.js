import axios from 'axios';

const instance = axios.create({
    BaseURL: 'https://api.themoviedb.org/3',
})
export default instance;