import { Pool } from 'pg';

import { DATABASE } from '#root/constants.js';

export const pool = new Pool({ connectionString: DATABASE });
