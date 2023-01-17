const AWS = require('aws-sdk');

const lambda = new AWS.Lambda({
  region: 'ap-south-1', // change to your region
});

/**
 *
 * @param {*} lamdaFunction
 * @param {*} payload
 * @returns
 */
module.exports.invokeLambdaService = function (lamdaFunction, payload) {
  return new Promise(((resolve, reject) => {
    const params = {

      FunctionName: lamdaFunction, /* required */
      InvocationType: 'RequestResponse',
      LogType: 'Tail',
      Payload: JSON.stringify(payload),
    };

    lambda.invoke(params, (err, data) => {
      if (err) {
        console.log('callLambdaFunction');
        console.log(err, err.stack); // an error occurred
        reject(err);
      } else {
        const response = JSON.parse(data.Payload);
        resolve(response);
      }
    });
  }));
};
