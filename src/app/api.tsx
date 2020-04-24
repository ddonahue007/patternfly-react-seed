import axios from 'axios';

// TODO: add to logger
console.log('API HOST: %s', process.env.API_HOST)
console.log('API PORT: %s', process.env.API_PORT)

export default axios.create({
  baseURL: `http://${process.env.API_HOST}:${process.env.API_PORT}/api`
});
