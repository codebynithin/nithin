// http.js - fetch wrapper with origin/port interceptor

export function apiFetch(input, init) {
  let url = input;
  // If input is a Request object, extract its URL
  if (typeof input === 'object' && input.url) {
    url = input.url;
  }

  // If running on localhost and url starts with /api, rewrite to :5000
  if (
    typeof window !== 'undefined' &&
    window.location.hostname === 'localhost' &&
    url.startsWith('/api')
  ) {
    url = `http://localhost:5000${url}`;
  }

  return fetch(url, init);
}
