const test = require('tap');
const fastly = require('../lib/fastly.js');
const fastly_api_key =  process.env.FASTLY_API_KEY || '';
const content_url =  process.env.CONTENT_URL || '';

var flib = new fastly(fastly_api_key);

tap.test('.purge()', function(t) {
	t.type(flib.purge, 'function', 'return function')
	t.end();
});
