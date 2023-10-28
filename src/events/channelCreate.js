module.exports = {
    name: 'channelCreate',
    execute: async (channel) => {
        try {
            let client = channel.client;
            if (channel.type === 'DM') return;

        } catch (error) {
            console.error(error);
        }
    }
};