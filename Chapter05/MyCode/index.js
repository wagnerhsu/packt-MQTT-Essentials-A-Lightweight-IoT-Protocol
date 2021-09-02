const mqtt = require('mqtt');

const host = 'wagner007.top';
const port = '1883';
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;


const connectUrl = `mqtt://${host}:${port}/mqtt`;


const client = mqtt.connect(connectUrl, {
    clientId,
    clean: false,
    connectTimeout: 4000,
    username: 'sun-health',
    password: 'GatewayPass@',
    reconnectPeriod: 1000

});

const topic = '/nodejs/mqtt';
client.on('connect', () => {
    console.log('Connected');
});

client.on("error", function (error) {
        console.log("Can't connect" + error);
    }
);

client.publish(topic,"Hello");
client.end();
console.log("Done");
