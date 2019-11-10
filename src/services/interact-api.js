import ApiService from './api';

const BASE_URL = 'http://localhost:5000/api';

const client = new ApiService({ baseURL: BASE_URL });

const interactApi = { events: {}, questions: {}, users: {} };

// Event
interactApi.events.createEvent = (token, payload) => {
  return client.post('/events', payload, tokenConfig(token));
};

interactApi.events.deleteEvent = (token, eventcode) => {
  return client.delete(`/events/${eventcode}`, tokenConfig(token));
};

interactApi.events.fetchEvent = eventcode => {
  return client.get(`/events/${eventcode}`);
};

interactApi.events.fetchEvents = (eventcode, cancelToken) => {
  if (eventcode) {
    return client.get(`/events`, {
      cancelToken,
      params: {
        eventcode: eventcode.trim(),
      },
    });
  }

  return client.get(`/events`, {
    cancelToken,
  });
};

interactApi.events.updateEvent = (token, eventcode, payload) => {
  return client.put(`/events/${eventcode}`, payload, tokenConfig(token));
};

// Question
interactApi.questions.createQuestion = payload => {};

interactApi.questions.deleteQuestion = (token, id) => {};

interactApi.questions.fetchQuestions = () => {};

interactApi.questions.updateQuestion = (token, id) => {};

// User
interactApi.users.login = ({ username, password }) => {
  return client.post('/auth', { username, password });
};

interactApi.users.loadUser = token => {
  return client.get('/auth/user', tokenConfig(token));
};

export default interactApi;

function tokenConfig(token) {
  return {
    headers: { 'x-auth-token': token },
  };
}
