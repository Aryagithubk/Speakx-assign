/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.29.3
// source: question.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./question_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.QuestionServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.QuestionServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SearchRequest,
 *   !proto.SearchResponse>}
 */
const methodDescriptor_QuestionService_SearchQuestions = new grpc.web.MethodDescriptor(
  '/QuestionService/SearchQuestions',
  grpc.web.MethodType.UNARY,
  proto.SearchRequest,
  proto.SearchResponse,
  /**
   * @param {!proto.SearchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SearchResponse.deserializeBinary
);


/**
 * @param {!proto.SearchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SearchResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SearchResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.QuestionServiceClient.prototype.searchQuestions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/QuestionService/SearchQuestions',
      request,
      metadata || {},
      methodDescriptor_QuestionService_SearchQuestions,
      callback);
};


/**
 * @param {!proto.SearchRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SearchResponse>}
 *     Promise that resolves to the response
 */
proto.QuestionServicePromiseClient.prototype.searchQuestions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/QuestionService/SearchQuestions',
      request,
      metadata || {},
      methodDescriptor_QuestionService_SearchQuestions);
};


module.exports = proto;
