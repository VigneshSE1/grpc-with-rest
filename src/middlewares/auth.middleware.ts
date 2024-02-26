import { RequestHandler } from 'express';

const authMiddleware = (): RequestHandler => {
  return async (req, res, next) => {
    next();
  };
};

export default authMiddleware;
