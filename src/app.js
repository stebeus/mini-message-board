import path from 'node:path';
import express from 'express';

export const app = express();

const dirname = import.meta.dirname;

const assetsPath = path.join(dirname, 'public');
const viewsPath = path.join(dirname, 'views');
