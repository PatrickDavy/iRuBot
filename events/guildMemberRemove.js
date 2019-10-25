module.exports = (client, member) => {
    const message = client.channels.find(ch => ch.name === 'admin-chat');
    const embeddedMessage =  {
        "embed": {
            "color": 0xFF0000,
            "timestamp": new Date(),
            "thumbnail": {
                "url": member.user.avatarURL
            },
            "author": {
                "name": `${member.user.tag}`,
                "icon_url": member.user.avatarURL
            },
            "fields": [
                {
                    "name": "Dear admin team,\n\n",
                    "value":
                        "I am not worthy of being in a mighty server such as this. Sorry to waste your time.\n\n" +
                        "Regards,\n" +
                        member.user.username +
                        "\n"
                }
            ]
        }
    };

    message.send(embeddedMessage).catch(console.error);
};
