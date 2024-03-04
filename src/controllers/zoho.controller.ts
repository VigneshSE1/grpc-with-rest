import { ZohoDeskService } from '@/services/zohodesk.service';
import { Request, Response, NextFunction } from 'express';
export class ZohoDeskController {
  public zohoDeskService = new ZohoDeskService();

  public triggerGameAction = (req: Request, res: Response, next: NextFunction) => {
    this.zohoDeskService
      .triggerGameAction(req.body.userId, req.body.gameId)
      .then(response => {
        res.send(response);
      })
      .catch(error => {
        next(error);
      });
  };
}
