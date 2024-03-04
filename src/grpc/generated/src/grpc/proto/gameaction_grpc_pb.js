// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var src_grpc_proto_gameaction_pb = require('../../../src/grpc/proto/gameaction_pb.js');

function serialize_gamification_GameActionRequest(arg) {
  if (!(arg instanceof src_grpc_proto_gameaction_pb.GameActionRequest)) {
    throw new Error('Expected argument of type gamification.GameActionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gamification_GameActionRequest(buffer_arg) {
  return src_grpc_proto_gameaction_pb.GameActionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gamification_GameActionResponse(arg) {
  if (!(arg instanceof src_grpc_proto_gameaction_pb.GameActionResponse)) {
    throw new Error('Expected argument of type gamification.GameActionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gamification_GameActionResponse(buffer_arg) {
  return src_grpc_proto_gameaction_pb.GameActionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

var GameActionServiceService = (exports.GameActionServiceService = {
  triggerGameAction: {
    path: '/gamification.GameActionService/TriggerGameAction',
    requestStream: false,
    responseStream: false,
    requestType: src_grpc_proto_gameaction_pb.GameActionRequest,
    responseType: src_grpc_proto_gameaction_pb.GameActionResponse,
    requestSerialize: serialize_gamification_GameActionRequest,
    requestDeserialize: deserialize_gamification_GameActionRequest,
    responseSerialize: serialize_gamification_GameActionResponse,
    responseDeserialize: deserialize_gamification_GameActionResponse,
  },
});

exports.GameActionServiceClient = grpc.makeGenericClientConstructor(GameActionServiceService);
