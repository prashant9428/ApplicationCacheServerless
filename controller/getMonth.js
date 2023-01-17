const respone = require('../utils/response');
const { getMonth } = require('../service/getMonth');

module.exports.getMonth = async function () {
  try {
    // console.log('event', event);
    const redisResp = await getMonth();
    return respone.successHandler(1, 'success', redisResp);
  } catch (error) {
    throw new Error(error.message);
  }
};
