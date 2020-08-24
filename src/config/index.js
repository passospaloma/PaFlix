const URL_BACKEND_DATA = window.location.hostname.includes('locahost')
  ? 'http://localhost:8080'
  : 'https://paflix.herokuapp.com';

export default { URL_BACKEND_DATA };
