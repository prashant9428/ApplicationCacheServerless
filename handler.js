const { getMonth } = require('./controller/getMonth');
const { serverErrorHandler } = require('./utils/response');

module.exports.getMonth = async function (event) {
  try {
    const month = await getMonth(event);
    return month;
  } catch (error) {
    console.log('getMonth Error: ', error);
    return serverErrorHandler(
      0,
      error.message ? error.message : 'Server side error',
    );
  }
};
