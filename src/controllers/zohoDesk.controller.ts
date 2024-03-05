import { ZohoDeskGameActionTrigger } from '@/interfaces/zohoDeskGameActionTrigger.interface';
import { ZohoDeskService } from '@/services/zohodesk.service';
import { Request, Response, NextFunction } from 'express';
export class ZohoDeskController {
  public zohoDeskService = new ZohoDeskService();

  public triggerGameAction = (req: Request, res: Response, next: NextFunction) => {
    const gameAction: ZohoDeskGameActionTrigger = req.body;
    this.zohoDeskService
      .createUserAndTriggerGameActionAsync(gameAction)
      .then(response => {
        res.send(response);
      })
      .catch(error => {
        next(error);
      });
  };
}
