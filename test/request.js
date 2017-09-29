const tap = require('tap');
const fastly = require('../lib/fastly.js');
const content_url = process.env.CONTENT_URL || '';
const service_id = process.env.SERVICE_ID || '';
const fastly_api_key = process.env.FASTLY_API_KEY || '';

var flib = new fastly(fastly_api_key);

// --> .request.send(< GET >) => .then(object)
tap.test('request GET -> then()', (t) => {
    t.type(flib.request, 'object', 'request => object');
    flib.request.options.method = 'GET';
    flib.request.options.path = `/content/edge_check?url=${content_url}`;
    flib.request.send()
        .then((res) => {
            t.type(res, 'object', '.then(object)');
            t.end();
        })
        .catch((err) => {
            t.fail(err);
            t.end();
        })
});
// --> .request.send() => .catch(object)
tap.test('request GET -> catch()', (t) => {
    flib.request.options.method = 'POST';
    var wrong_url = 'sorry for the inconveniences, im testing a new library :(';
    flib.request.options.path = `/content/edge_check?url=${wrong_url}`;
    flib.request.send()
        .then((res) => {
            t.fail(res);
            t.end()
        })
        .catch((err) => {
            t.type(err, 'object', '.catch(object)');
            t.end();
        })
});
/*
// --> .request.send(< POST >) => .then(object)
tap.test('request POST -> then()', (t) => {
    t.type(flib.request, 'object', 'request => object');
    flib.request.options.method = 'POST';
    flib.request.options.path = `/service/${service_id}/purge_all`;
    flib.request.send()
        .then((res) => {
            t.type(res, 'object', '.then(object)');
            t.end();
        })
        .catch((err) => {
            t.fail(err);
            t.end();
        })
});
*/

