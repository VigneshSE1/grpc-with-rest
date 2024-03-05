import * as grpc from '@grpc/grpc-js';
import { GameActionServiceClient } from '../generated/gameaction_grpc_pb';

const grpcServerEndpoint = 'rewardrally-baseapi.azurewebsites.net';

const grpcClient = new GameActionServiceClient(grpcServerEndpoint, grpc.credentials.createSsl());

export default grpcClient;
