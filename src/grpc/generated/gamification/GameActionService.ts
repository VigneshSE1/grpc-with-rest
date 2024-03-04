// Original file: src/grpc/proto/gameaction.proto

import type * as grpc from '@grpc/grpc-js';
import type { MethodDefinition } from '@grpc/proto-loader';
import type {
  GameActionRequest as _gamification_GameActionRequest,
  GameActionRequest__Output as _gamification_GameActionRequest__Output,
} from '../gamification/GameActionRequest';
import type {
  GameActionResponse as _gamification_GameActionResponse,
  GameActionResponse__Output as _gamification_GameActionResponse__Output,
} from '../gamification/GameActionResponse';

export interface GameActionServiceClient extends grpc.Client {
  TriggerGameAction(
    argument: _gamification_GameActionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_gamification_GameActionResponse__Output>,
  ): grpc.ClientUnaryCall;
  TriggerGameAction(
    argument: _gamification_GameActionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_gamification_GameActionResponse__Output>,
  ): grpc.ClientUnaryCall;
  TriggerGameAction(
    argument: _gamification_GameActionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_gamification_GameActionResponse__Output>,
  ): grpc.ClientUnaryCall;
  TriggerGameAction(
    argument: _gamification_GameActionRequest,
    callback: grpc.requestCallback<_gamification_GameActionResponse__Output>,
  ): grpc.ClientUnaryCall;
  triggerGameAction(
    argument: _gamification_GameActionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_gamification_GameActionResponse__Output>,
  ): grpc.ClientUnaryCall;
  triggerGameAction(
    argument: _gamification_GameActionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_gamification_GameActionResponse__Output>,
  ): grpc.ClientUnaryCall;
  triggerGameAction(
    argument: _gamification_GameActionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_gamification_GameActionResponse__Output>,
  ): grpc.ClientUnaryCall;
  triggerGameAction(
    argument: _gamification_GameActionRequest,
    callback: grpc.requestCallback<_gamification_GameActionResponse__Output>,
  ): grpc.ClientUnaryCall;
}

export interface GameActionServiceHandlers extends grpc.UntypedServiceImplementation {
  TriggerGameAction: grpc.handleUnaryCall<_gamification_GameActionRequest__Output, _gamification_GameActionResponse>;
}

export interface GameActionServiceDefinition extends grpc.ServiceDefinition {
  TriggerGameAction: MethodDefinition<
    _gamification_GameActionRequest,
    _gamification_GameActionResponse,
    _gamification_GameActionRequest__Output,
    _gamification_GameActionResponse__Output
  >;
}
