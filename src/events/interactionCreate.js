const { InteractionType } = require("discord.js");

module.exports = {
  name: 'interactionCreate',
  execute: async (interaction) => {
    let client = interaction.client;
    if (!interaction.type == InteractionType.ApplicationCommand) return;
    if (interaction.user.bot) return;
    try {

    } catch (error) {
      console.error(error);
    }
  }
}