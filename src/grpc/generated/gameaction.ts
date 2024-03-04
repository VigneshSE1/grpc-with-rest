import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type {
  GameActionServiceClient as _gamification_GameActionServiceClient,
  GameActionServiceDefinition as _gamification_GameActionServiceDefinition,
} from './gamification/GameActionService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  gamification: {
    GameActionRequest: MessageTypeDefinition;
    GameActionResponse: MessageTypeDefinition;
    GameActionService: SubtypeConstructor<typeof grpc.Client, _gamification_GameActionServiceClient> & {
      service: _gamification_GameActionServiceDefinition;
    };
  };
}
