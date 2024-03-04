import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { ZohoDeskController } from '@/controllers/zoho.controller';

export class ZohoDeskRoute implements Routes {
  public path = '/zohodesk';
  public router = Router();
  public zohoController = new ZohoDeskController();

  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.post(`${this.path}`, this.zohoController.triggerGameAction);
  }
}
