import { loadEnvFile } from 'node:process';

const { DATABASE_URL, PORT = 3000, NODE_ENV } = process.env;

if (NODE_ENV !== 'production') {
  loadEnvFile()
}

export {DATABASE_URL, PORT, NODE_ENV  }
