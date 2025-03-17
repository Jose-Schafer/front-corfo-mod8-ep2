import { encrypt } from '@/lib/encription'

const API_KEY = import.meta.env.VITE_API_KEY; // This should be extracted from an environment variable

export function get(url, body = null) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const headers = new Headers({
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      });

      let encryptedBody = null;

      // Encrypt the body if provided
      if (body) {
        encryptedBody = encrypt(body);
      }

      fetch(url, {
        method: body ? 'POST' : 'GET', // Use POST if a body is present
        headers: headers,
        body: encryptedBody ? JSON.stringify({ encryptedData: encryptedBody }) : null,
      })
        .then((response) => {
          if (response.ok) {
            resolve(response.json());
          } else {
            reject(new Error(`Error al obtener datos de ${url}: ${response.statusText}`));
          }
        })
        .catch((error) => reject(error));
    }, 1000); // Simulación de latencia de red
  });
}

