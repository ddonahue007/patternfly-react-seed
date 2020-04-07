import axios from 'axios';

export default axios.create({
  baseURL: `http://customer-demo-api:8080/api`
});
