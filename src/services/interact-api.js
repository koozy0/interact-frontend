import ApiService from './api';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const client = new ApiService({ baseURL: BASE_URL });

const interactApi = { events: {}, questions: {}, users: {} };

// Event
interactApi.events.createEvent = (token, payload) => {
  return client.post('/events', payload, tokenConfig(token));
};

interactApi.events.deleteEvent = (token, eventId) => {
  return client.delete(`/events/${eventId}`, tokenConfig(token));
};

interactApi.events.fetchEventById = eventId => {
  return client.get(`/events/${eventId}`);
};

interactApi.events.fetchEventByCode = eventcode => {
  return client.get(`/events/find`, {
    params: {
      eventcode: eventcode.trim(),
    },
  });
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

interactApi.events.updateEvent = (token, eventId, payload) => {
  return client.put(`/events/${eventId}`, payload, tokenConfig(token));
};

// Question
interactApi.questions.createQuestion = (eventId, payload) => {
  return client.post(`events/${eventId}/questions`, payload);
};

interactApi.questions.deleteQuestion = (questionId, token) => {};

interactApi.questions.fetchQuestions = eventId => {
  return client.get(`events/${eventId}/questions`);
};

interactApi.questions.updateQuestion = (questionId, token) => {};

// User
interactApi.users.createUser = payload => {
  return client.post('/users', payload);
};

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
