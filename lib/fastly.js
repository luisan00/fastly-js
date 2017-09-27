/**
 * fastly-lib
 * Node.js client to interface with the API fastly
 * @author luisan00
 * @copyright (c) 2017 luisan00 
 */

const request = require('./request');

var fastly = function(api_key) {
    this.request = new request(api_key);
}

// --UTILITIES SECTION--
/**
 * [content]
 * @param  {String} url
 * @return {Object}
 */
fastly.prototype.content = function(url) {
    return this.request.get(`/content/edge_check?url=${url}`);
};

/**
 * [datacenters]
 * @return {Object}
 */
fastly.prototype.datacenters = function() {
    return this.request.get('/datacenters')
};
/**
 * [docs]
 * @return {Object} 
 */
fastly.prototype.docs = function() {
    return this.request.get('/docs')
};

fastly.prototype.public_ip_list = function(){
	return this.request.get('/public-ip-list')
};

module.exports = fastly;