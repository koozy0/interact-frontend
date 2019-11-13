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
    // Do not throw error for cancelled requests
    if (axios.isCancel(error)) {
      console.log('Request cancelled:', error);
    } else {
      return Promise.reject(error);
    }
  }

  get(path, config) {
    return this.client.get(path, config).then(res => res.data);
  }

  post(path, payload, config) {
    return this.client.post(path, payload, config).then(res => res.data);
  }

  put(path, payload, config) {
    return this.client.put(path, payload, config).then(res => res.data);
  }

  patch(path, payload, config) {
    return this.client.patch(path, payload, config).then(res => res.data);
  }

  delete(path, config) {
    return this.client.delete(path, config).then(res => res.data);
  }
}

export default ApiService;
