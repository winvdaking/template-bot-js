const { Client } = require("discord.js");

/**
 * @param {Client} client 
 */
module.exports = {
    name: 'error',
    execute: (error) => {
        console.log("Erreur : " + error);
    },
};