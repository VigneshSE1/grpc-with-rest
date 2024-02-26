require('dotenv').config();

export const CONFIG = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  DB_CONNECTION: process.env.DB_CONNECTION,
  LOG_DIR: process.env.LOG_DIR,
  LOG_FORMAT: process.env.LOG_FORMAT,
  ORIGIN: process.env.ORIGIN,
  CREDENTIALS: process.env.CREDENTIALS === 'true',
};
