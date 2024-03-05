import { GameActionServiceClient } from '@/grpc/generated/gameaction_grpc_pb';
const grpc = require('@grpc/grpc-js');
const { GameActionRequest } = require('../grpc/generated/gameaction_pb');

export class ZohoDeskService {
  public triggerGameAction = async (userId: string, gameId: string) => {
    const grpcServerEndpoint = 'rewardrally-baseapi.azurewebsites.net';
    const grpcClient = new GameActionServiceClient(grpcServerEndpoint, grpc.credentials.createSsl());
    const request = new GameActionRequest();
    request.setGameid(gameId);
    request.setUserid(userId);
    grpcClient.triggerGameAction(request, (error, response) => {
      if (!error) {
        return error;
      } else {
        return response;
      }
    });
  };
}
