import axios from 'axios';

// TODO: add to logger
console.log('API HOST: %s', process.env.API_HOST)
console.log('API PORT: %s', process.env.API_PORT)

if (process.env.API_PORT) {
  console.log('API URL', `http://${process.env.API_HOST}:${process.env.API_PORT}/api`);
  process.env.API_URL=`http://${process.env.API_HOST}:${process.env.API_PORT}/api`
}
else {
  console.log('API URL', `http://${process.env.API_HOST}/api`);
  process.env.API_URL=`http://${process.env.API_HOST}/api`
}

export default axios.create({
  baseURL: `${process.env.API_URL}`
});
