#! /usr/bin/env node
import Fastify from 'fastify'
import cors from '@fastify/cors';
const PORT = 3004; // Port number to listen on
const REMOTE_ENTRY_FILENAME = "remoteEntry.js";

const basepathByRemoteName = {
    app2: "http://localhost:3002",
    app3: "http://localhost:3003"
}

const fastify = new Fastify();

await fastify.register(cors, {
    origin: "*"
});

// Define the endpoint
fastify.get('/remote/:name', (request, reply) => {
    console.log("Hello from service")
    const basepath = basepathByRemoteName[request.params.name];

    if (!basepath) {
        reply.code(404);
    }

    reply.send({
        basepath
    });
});

// Start the server
fastify.listen({
    port: PORT
}, (err) => {
    if (err) throw err;
    console.log(`Registry service running on http://localhost:${PORT}`);
})