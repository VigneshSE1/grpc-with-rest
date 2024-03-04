import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { GameActionRequest } from '../generated/gamification/GameActionRequest';
import { GameActionResponse } from '../generated/gamification/GameActionResponse';
import * as path from 'path';

class GrpcClient {
  private client: grpc.Client;
  private gameActionService: any;

  constructor() {
    this.client = new grpc.Client('rewardrally-baseapi.azurewebsites.net', grpc.credentials.createInsecure());
    this.initService();
  }

  private initService() {
    const absolutePath = path.resolve(__dirname, '../proto/gameaction.proto');
    const packageDefinition = protoLoader.loadSync(absolutePath, {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
    });

    const gamificationProto = grpc.loadPackageDefinition(packageDefinition) as any;
    this.gameActionService = new gamificationProto.gamification.GameActionService(
      'rewardrally-baseapi.azurewebsites.net',
      grpc.credentials.createInsecure(),
    );
  }

  public async triggerGameAction(request: GameActionRequest): Promise<GameActionResponse> {
    return new Promise((resolve, reject) => {
      this.gameActionService.TriggerGameAction(request, (error: any, response: GameActionResponse) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }
}

export default GrpcClient;
