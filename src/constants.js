import { loadEnvFile } from 'node:process';

loadEnvFile();

export const { PORT = 3000, DATABASE_URL } = process.env;
