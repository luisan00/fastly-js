const tap = require('tap');
const fastly = require('../lib/fastly.js');
const fastly_api_key =  process.env.FASTLY_API_KEY || ''

tap.test('fastly constructor', function(t){
	var flib = new fastly(fastly_api_key);

	t.type(flib.request, 'object', 'request => object');
	t.type(flib.request.options, 'object', '.options => object');
	t.match(flib.request.options, {
		method: 'GET',
		hostname: 'api.fastly.com',
		path: '/',
		headers: {
			'Fastly-Key': api_key,
			'Accept': 'application/json'
		}
	}, 'options => match the pattern');
	t.end();
})

tap.test('utilities', function(t) {

	var flib = new fastly(fastly_api_key);

	t.type(flib, 'object', 'constructor');
	t.type(flib.content, 'function', 'method content');
	t.type(flib.datacenters, 'function', 'method datacenters');
	t.type(flib.docs, 'function', 'method docs');
	t.type(flib.public_ip_list, 'function', 'method public_ip_list');
	t.end();
});


tap.test('purge', function(t) {

	var flib = new fastly(fastly_api_key);

	t.type(flib, 'object', 'constructor');
	t.type(flib.purge, 'function', 'purge method');
	t.type(flib.purge_all, 'function', 'purge all method');
	t.type(flib.purge_by_key, 'function', 'purge by key method');
	t.type(flib.purge_multiple, 'function', 'purge multiple method');
	t.end();
});
