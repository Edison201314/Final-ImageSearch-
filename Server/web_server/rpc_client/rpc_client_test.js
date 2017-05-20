/**
 * Created by xinxie on 5/09/17.
 */


var client = require('./rpc_client');

// invoke 'add'
client.add(1, 2, function(response) {
    console.assert(response == 3);
});