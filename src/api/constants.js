/**
 * Base URL for all API requests.
 * Points to the Noroff API v2.
 * @constant {string}
 * @readonly
 */
export const API_BASE = 'https://v2.api.noroff.dev';

/**
 * Endpoint for the Noroff Online Shop API.
 * Extends the base URL with the `/online-shop` path.
 * @constant {string}
 * @readonly
 */
export const API_SHOP = `${API_BASE}/online-shop`;
