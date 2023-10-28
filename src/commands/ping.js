const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Retourne la latence entre le client et le serveur."),
    run: async (client, interaction) => {
        try {
            return interaction.reply({
                content: `*Latence* : **${Date.now() - interaction.createdTimestamp}ms**.\n*API Latence :* **${Math.round(client.ws.ping)}ms**.\n*Up time :* **${client.uptime}ms**.`,
                ephemeral: false
            });
        } catch (error) {
            console.error(error);
        }
    },
};