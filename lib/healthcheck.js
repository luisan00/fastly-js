/**
 * healthcheck.js
 */

var healthcheck = function(request) {
	this.request = request;
}


healthcheck.prototype.findOne = function(args){
	// TODO
};

healthcheck.prototype.findAll = function(args){
	// TODO 
};

/**
 * healthcheck create
 * @param  {String} service
 * @param  {Number} version
 * @param  {String} name
 * @param  {String} host
 * @param  {String} path
 * @return {Object}
 */
healthcheck.prototype.create = function(service, version, name, host, path) {
	var body = {
		name: name,
		host: host,
		path: path
	};
	return this.request.post(`/service/${service}/version/${version}/healthcheck`, body);
};

/**
 * healthcheck update
 * @param  {String} service
 * @param  {Number} version
 * @param  {String} old_name
 * @param  {String} new_name
 * @param  {String} host
 * @param  {String} path
 * @return {Object}
 */
healthcheck.prototype.update = function(service, version, old_name, new_name, host, path) {
	var body = {};
	body.name = new_name || old_name;
	body.host = host || null;
	body.path = path || null;
	return this.request.put(`/service/${service}/version/${version}/healthcheck/${old_name}`)
	
};

/**
 * healthcheck delete
 * @param  {String} service
 * @param  {Number} version
 * @param  {String} name
 * @return {Object}
 */
healthcheck.prototype.delete = function(service, version, name) {
	return this.request.delete(`/service/${service}/version/${version}/healthcheck/${name}`);
};
module.exports = healthcheck;
