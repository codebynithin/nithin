export function apiFetch(input: string | Request, init?: RequestInit): Promise<Response> {
  let url: string;

  if (typeof input === 'string') {
    url = input;
  } else if (typeof input === 'object' && input !== null && 'url' in input) {
    url = (input as Request).url;
  } else {
    throw new TypeError('apiFetch: input must be a string or Request object');
  }

  if (typeof url === 'string' && Object.prototype.hasOwnProperty.call(url, '__proto__')) {
    throw new Error('Unsafe URL detected');
  }

  if (
    typeof url === 'string' &&
    !url.startsWith('/') &&
    !url.startsWith('http://') &&
    !url.startsWith('https://')
  ) {
    throw new Error('apiFetch: Only http(s) or relative URLs are allowed');
  }

  if (
    typeof window !== 'undefined' &&
    window.location.hostname === 'localhost' &&
    url.startsWith('/api')
  ) {
    url = `http://localhost:5000${url}`;
  }

  return fetch(url, init);
}
