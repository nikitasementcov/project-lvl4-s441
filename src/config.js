export const isProd = process.env.NODE_ENV === 'production';

export const API_PATH_PREFIX = process.env.API_PATH_PREFIX || '/api/v1/';
export const HTTP_TIMEOUT = process.env.HTTP_TIMEOUT || 1000;
