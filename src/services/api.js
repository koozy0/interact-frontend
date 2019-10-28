import axios from 'axios';

const BASE_URL = process.env.BASE_URL || 'http://localhost:5000/';
const TIMEOUT = 20000;
const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

class ApiService {
  constructor({
    baseURL = BASE_URL,
    timeout = TIMEOUT,
    headers = HEADERS,
    auth,
  }) {
    const client = axios.create({ baseURL, timeout, headers, auth });

    client.interceptors.response.use(this.handleSuccess, this.handleError);
    this.client = client;
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    if (axios.isCancel(error)) {
      console.log('Request canceled:', error);
    } else {
      console.log('An error occurred:', error);
    }

    Promise.reject(error);
  }

  get(path, config) {
    return this.client.get(path, config);
  }

  post(path, payload, config) {
    return this.client.post(path, payload, config);
  }

  put(path, payload, config) {
    return this.client.put(path, payload, config);
  }

  patch(path, payload, config) {
    return this.client.patch(path, payload, config);
  }

  delete(path, config) {
    return this.client.delete(path, config);
  }
}

export default ApiService;
