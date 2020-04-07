import axios from 'axios';

export default axios.create({
  baseURL: `http://customer-demo-api/api`
});
