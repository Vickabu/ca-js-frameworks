/**
 * Performs a fetch request to the given URL and returns the `data` property from the JSON response.
 *
 * @async
 * @function doFetch
 * @param {string} url - The URL to fetch data from.
 * @throws {Error} Throws an error if the HTTP response is not ok (status not in the 200-299 range).
 * @returns {Promise<any>} Resolves with the `data` property extracted from the JSON response.
 */
export async function doFetch(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Fetch error: ${response.status} ${response.statusText}`);
  }
  const data = await response.json();
  return data.data;
}
