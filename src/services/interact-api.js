import ApiService from './api';

const BASE_URL = 'http://localhost:5000/api';

const client = new ApiService({ baseURL: BASE_URL });

const interactApi = {};

interactApi.getEvents = () => client.get('/events');

interactApi.searchEvents = (q, cancelToken) =>
  client.get('/events/search', {
    params: { q: q.trim() },
    ...(cancelToken && { cancelToken }),
  });

export default interactApi;
