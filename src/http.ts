/**
 * Securely fetches resources, rewriting /api URLs to localhost:5000 in dev.
 * Strictly types input, validates URLs, and prevents prototype pollution.
 * @param input - URL string or Request object
 * @param init - Optional fetch init options
 * @returns Promise<Response>
 */
export function apiFetch(
  input: string | Request,
  init?: RequestInit
): Promise<Response> {
  let url: string;

  if (typeof input === 'string') {
    url = input;
  } else if (typeof input === 'object' && input !== null && 'url' in input) {
    // Defensive: Only accept Request objects
    url = (input as Request).url;
  } else {
    throw new TypeError('apiFetch: input must be a string or Request object');
  }

  // Prevent prototype pollution by disallowing dangerous keys
  if (typeof url === 'string' && Object.prototype.hasOwnProperty.call(url, '__proto__')) {
    throw new Error('Unsafe URL detected');
  }

  // Only allow http(s) or relative URLs
  if (
    typeof url === 'string' &&
    !url.startsWith('/') &&
    !url.startsWith('http://') &&
    !url.startsWith('https://')
  ) {
    throw new Error('apiFetch: Only http(s) or relative URLs are allowed');
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
