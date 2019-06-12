import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-2814d.firebaseio.com/'
});

export default instance;
