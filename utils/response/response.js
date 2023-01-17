/**
 *
 * @param {*} statusId
 * @param {*} message
 * @param {*} data
 * @returns
 */
module.exports.successHandler = (statusId, message, data) => ({
  statusCode: 200,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  },
  body: JSON.stringify({
    statusId: statusId || 1,
    message: message || 'Operation successfully completed',
    resbody: data || null,
  }),
});

/**
   *
   * @param {*} statusId
   * @param {*} message
   * @returns
   */
module.exports.clientErrorHandler = (statusId, message) => ({
  statusCode: 400,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  },
  body: JSON.stringify({
    statusId: statusId || 0,
    message: message || 'Client error occurred',
    resbody: null,
  }),
});

/**
   *
   * @param {*} statusId
   * @param {*} message
   * @returns
   */
module.exports.authorizationErrorHandler = (statusId, message) => ({
  statusCode: 401,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  },
  body: JSON.stringify({
    statusId: statusId || 0,
    message: message || 'User not authorized',
    resbody: null,
  }),
});

/**
   *
   * @param {*} statusId
   * @param {*} message
   * @returns
   */
module.exports.serverErrorHandler = (statusId, message) => ({
  statusCode: 500,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  },
  body: JSON.stringify({
    statusId: statusId || 0,
    message: message || 'Server error occurred',
    resbody: null,
  }),
});
