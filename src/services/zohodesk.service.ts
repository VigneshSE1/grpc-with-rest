import GrpcClient from '@/grpc/client/grpc-client';
import { GameActionRequest } from '@/grpc/generated/gamification/GameActionRequest';

export class ZohoDeskService {
  public grpcClient = new GrpcClient();

  public triggerGameAction = async (userId: string, gameId: string) => {
    const request: GameActionRequest = {
      gameId: gameId,
      userId: userId,
    };
    return await this.grpcClient.triggerGameAction(request);
  };
}
