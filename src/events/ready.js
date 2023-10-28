const { ActivityType } = require("discord.js");
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
   	client.user.setActivity({ name: `MP pour DM le Staff`, type: ActivityType.Playing });
}};
