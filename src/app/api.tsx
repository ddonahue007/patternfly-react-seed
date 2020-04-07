import axios from 'axios';

export default axios.create({
  baseURL: `http://${process.env.CUSTOMER_DEMO_API_SERVICE_HOST}:${process.env.CUSTOMER_DEMO_API_SERVICE_PORT_8080}/api`
});
