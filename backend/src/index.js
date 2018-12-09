// let's go!
require('dotenv').config({path: 'variables.env'});
const createServer = require('createServer');
const db = require('./db');

const server = createServer();

// TODO use express middleqare to handle cookies (JWT) and populate current user
server.start(
    {
        cors: {
            credentials: true, 
            origin: process.env.FRONTEND_URL,
        },

    }, 
    deets => {
        console.log(`server is now running on port http://localhost:${deets.port}`);
    }
);