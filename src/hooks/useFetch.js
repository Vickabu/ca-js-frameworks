import { useEffect, useState } from 'react';
import { doFetch } from '../api/doFetch';

/**
 * Custom React hook for fetching data from a given URL.
 * Uses the `doFetch` utility to perform the fetch request.
 *
 * @param {string} url - The URL to fetch data from.
 * @returns {Object} An object containing:
 *   - data {any[]} - The fetched data, defaulting to an empty array if no data.
 *   - loading {boolean} - Indicates if the fetch request is in progress.
 *   - error {string|null} - Error message if the fetch fails, otherwise null.
 */
export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const result = await doFetch(url);
        if (isMounted) setData(result);
      } catch (err) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data: data ?? [], loading, error };
}
