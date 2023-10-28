module.exports = {
  name: 'messageCreate',
  execute: async (message) => {
    try {
      let client = message.client;
      if (message.author.bot) return;
      if (message.channel.type === 'DM') return;

    } catch (error) {
      console.error(error);
    }
  },
};