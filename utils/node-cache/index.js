const NodeCache = require('node-cache');
// wrapper function which has the function names same as redis
class Cache extends NodeCache {
  /**
     *
     * @param {*} key
     * @returns
     */
  hget(key) {
    return this.get(key);
  }

  /**
     *
     * @param {*} key
     * @param {*} value
     * @param {*} ttl
     * @returns
     */
  hset(key, value, ttl) {
    if (ttl) {
      return this.set(key, value, ttl) === true ? 1 : 0;
    }
    return this.set(key, value) === true ? 1 : 0;
  }
}

module.exports = new Cache();
