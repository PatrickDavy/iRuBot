module.exports = (client) => {
    console.log(`Ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
    const message = client.channels.find(ch => ch.name === 'logchannel');
    // message.send(`I am hard at work`);
};
