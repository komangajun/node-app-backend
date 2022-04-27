/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable quotes */

const routes = require('./routes');
const NotesHandler = require("./handler");

module.exports = {
    name: 'notes',
    version: '1.0.0',
    register: async (server, { service, validator }) => {
        const notesHandler = new NotesHandler(service, validator);
        server.route(routes(notesHandler));
    },
};
