import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-app-4a44d.firebaseio.com/'
});

export default instance;