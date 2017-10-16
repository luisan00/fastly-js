const tap = require('tap');
const fastly = require('../lib/fastly.js');
const service_id = process.env.SERVICE_ID || '';
const fastly_api_key = process.env.FASTLY_API_KEY || '';
//
const content_url = process.env.CONTENT_URL || '';
const wrong_url = 'wrong_url';
//
var flib = new fastly(fastly_api_key);
tap.test('POST will return string', (t) => {
    t.type(flib.request, 'object', 'request => object');
    flib.request.options.method = 'POST';
    flib.request.options.path = `/content/edge_check?url=${content_url}`;
    flib.request.send()
        .then((res) => {
            console.log(res)
            t.type(res, 'string', 'string');
            t.end();
        })
        .catch((err) => {
            t.fail(err);
            t.end();
        })
});
