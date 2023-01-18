const localCache = require('../utils/node-cache');

const KEY = 'month';

module.exports.getMonth = async function () {
  try {
    if (localCache.has(KEY)) {
      return localCache.hget(KEY);
    }
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const random = Math.floor(Math.random() * months.length);
    return localCache.hset(KEY, months[random], 60) === 1 ? 'values has been set to cache' : 'something wrong';
  } catch (error) {
    throw new Error(error.message);
  }
};
