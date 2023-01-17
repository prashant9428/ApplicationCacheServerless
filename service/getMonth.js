const localCache = require('../utils/node-cache');

module.exports.getMonth = async function () {
  try {
    if (localCache.has('month')) {
      return localCache.hget('month');
    }
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const random = Math.floor(Math.random() * months.length);
    return localCache.hset('month', months[random], 60) === 1 ? 'values has been set to cache' : 'something wrong';
  } catch (error) {
    throw new Error(error.message);
  }
};
