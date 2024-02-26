import { ZohoDeskService } from '@/services/zohodesk.service';
import { Container } from 'typedi';

export class ZohoDeskController {
  public user = Container.get(ZohoDeskService);
}
