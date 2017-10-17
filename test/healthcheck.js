const tap = require('tap');
const fastly = require('../lib/fastly.js');
const fastly_api_key =  process.env.FASTLY_API_KEY || '';
const content_url =  process.env.CONTENT_URL || '';
const service_id = process.env.SERVICE_ID;
const version = 1;
const name = 'fakeName';

var flib = new fastly(fastly_api_key);

tap.test('healthcheck', (t) => {
  flib.healthcheck.delete(service_id, version, name)
    .then((res)=>{
      t.type(res, 'object', 'return object');
      t.end();
    })

});
