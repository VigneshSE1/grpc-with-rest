import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { ZohoDeskController } from '@/controllers/zohoDesk.controller';
import { ValidationMiddleware } from '@/middlewares/validation.middleware';
import { ZohoDeskTriggerGameActionDTO } from '@/dtos/ZohoDeskTriggerGameAction.dto';

export class ZohoDeskRoute implements Routes {
  public path = '/zohodesk';
  public router = Router();
  public zohoController = new ZohoDeskController();

  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.post(`${this.path}/triggerGameAction`, ValidationMiddleware(ZohoDeskTriggerGameActionDTO), this.zohoController.triggerGameAction);
  }
}
