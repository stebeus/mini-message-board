import { loadEnvFile } from 'node:process';

loadEnvFile();

export const { PORT = 3000 } = process.env;
