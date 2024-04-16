import sendRequest from './send-request';
const BASE_URL = '/api/upgrades';

// Refactored code below
export function upgradesIndex() {
    return sendRequest(`${BASE_URL}/index`);
  }
  