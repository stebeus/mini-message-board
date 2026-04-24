import path from 'node:path';

// Paths

const dirname = import.meta.dirname;

const ASSETS_PATH = 'public';
const VIEWS_PATH = path.join(dirname, 'views');

// Status codes

const NOT_FOUND = 404;
const INTERNAL_SERVER_ERROR = 500;

export { ASSETS_PATH, INTERNAL_SERVER_ERROR, NOT_FOUND, VIEWS_PATH };
