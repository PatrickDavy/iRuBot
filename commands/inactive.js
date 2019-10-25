exports.run = (client, message, args) => {
    async function execucte(message, args) {
        const guild = message.guild;
        const currentDateValue = message.createdTimestamp;
        const maximumLastMessageValue = args[0] * 86400000;
        let inactiveCount = 0;
        await guild.members.array().forEach(member => {
            if (
                !member.lastMessage ||
                currentDateValue - maximumLastMessageValue <
                member.lastMessage.createdTimestamp
            ) {
                inactiveCount++;
            }
        });
        return message.channel.send(
            `There are ${inactiveCount} users which have not sent a message in the past ${
                args[0]
            } days.`
        );
    }
    execucte(message,args);
};
