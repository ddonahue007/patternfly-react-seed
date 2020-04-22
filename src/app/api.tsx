import axios from 'axios';

// TODO: add to logger
console.log('API HOST: %s', process.env.CUSTOMER_DEMO_API_SERVICE_HOST)
console.log('API PORT: %s', process.env.CUSTOMER_DEMO_API_SERVICE_PORT)

export default axios.create({
  baseURL: `http://${process.env.CUSTOMER_DEMO_API_SERVICE_HOST}:${process.env.CUSTOMER_DEMO_API_SERVICE_PORT}/api`
});
