module.exports = function (RED) {
    "use strict";

    const { Parser, EventTypes, SERVICE_DATA_UUID } = require("./parser");

    function MijiaFilterNode(config) {
        RED.nodes.createNode(this, config);
        
        let node = this;

        node.on('input', function (msg, send, done) {
            send = send || function(){ node.send.apply(node, arguments)}

            const { advertisement: { serviceData } = {}, address } = msg.payload || {};
            const miServiceData = serviceData && serviceData.find(data => data.uuid.toLowerCase() === SERVICE_DATA_UUID);
            
            if (miServiceData) {
                try {
                    let data = new Parser(miServiceData.data).parse().event;
                    let msg = { payload: { data: data, address: address}};
                    send(msg);                    
                } catch (e) {
                    
                }       
            }
            
            if (done) {
                done();
            }
        });
    }
    RED.nodes.registerType("Mijia BLE Filter", MijiaFilterNode);
}
