import ApiService from './api';

const BASE_URL = 'http://localhost:5000/api';

const client = new ApiService({ baseURL: BASE_URL });

const interactApi = {};

// events
interactApi.getEvents = token =>
  client.get('/events', {
    ...(token && { headers: { 'x-auth-token': token } }),
  });

interactApi.getEvent = eventCode => client.get(`/events/${eventCode}`);

interactApi.searchEvents = (q, cancelToken) =>
  client.get('/events/search', {
    params: { q: q.trim() },
    ...(cancelToken && { cancelToken }),
  });

interactApi.createEvent = (token, { createdBy, name, code, start, end }) =>
  client.post(
    '/events',
    {
      createdBy,
      name,
      code,
      start,
      end,
    },
    {
      ...(token && { headers: { 'x-auth-token': token } }),
    },
  );

interactApi.createQuestion = (eventCode, { author, question }) =>
  client.post(`/events/${eventCode}/questions`, { author, question });

// users
interactApi.getUser = token =>
  client.get(`/auth/user`, {
    ...(token && { headers: { 'x-auth-token': token } }),
  });

interactApi.login = ({ username, password }) =>
  client.post('/auth', { username, password });

export default interactApi;
