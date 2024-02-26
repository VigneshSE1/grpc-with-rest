import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';

export class ZohoDeskRoute implements Routes {
  public path = '/zohodesk';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {}
}
