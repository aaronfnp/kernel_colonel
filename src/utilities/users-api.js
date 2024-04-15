<<<<<<< HEAD
import sendRequest from './send-request';
const BASE_URL = '/api/users';

// Refactored code below
export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}

export function updateScore(userId, newScore) {
  return sendRequest(`${BASE_URL}/${userId}/update-score`, 'PUT', { score: newScore });
}

export function loadLB() {
  return sendRequest(`${BASE_URL}/loadLB`);
}
=======
import sendRequest from './send-request';
const BASE_URL = '/api/users';

// Refactored code below
export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}

export function updateScore(userId, newScore, newTotalScore) {
  return sendRequest(`${BASE_URL}/${userId}/update-score`, 'PUT', { newScore: newScore, newTotalScore: newTotalScore });
}

export function updateInfo(userId, newName, newEmail) {
  return sendRequest(`${BASE_URL}/${userId}/update-info`, 'PUT', {name: newName, email: newEmail})
}

export function loadLB() {
  return sendRequest(`${BASE_URL}/loadLB`);
}
>>>>>>> 5197e5ba8c538bf8d9dc370f928a8aa8b810a506
