module.exports = (client, member) => {
    const message = client.channels.find(ch => ch.name === 'welcome');
    const user = client.users.find(user => user.username === "iAmNukinFuts");
    const socials = client.channels.find(ch => ch.name === 'socials');
    const streamAnnouncements = client.channels.find(ch => ch.name === 'stream-announcements');
    const setups = client.channels.find(ch => ch.name === 'setups');
    const memes = client.channels.find(ch => ch.name === 'memes');
    const clips = client.channels.find(ch => ch.name === 'clips');
    const tipsAndTricks = client.channels.find(ch => ch.name === 'tips-and-tricks');
    const giveawaysAndDiscounts = client.channels.find(ch => ch.name === 'giveaways-and-discounts');

    const embeddedMessage =  {
        "embed": {
            "color": 0xFF0000,
            "timestamp": new Date(),
            "fields": [
                {
                    "name": "Dear " + member.user.username + ",\n\n",
                    "value":
                        "Feel Free to Stay , Enjoy, Shoot heads , Sweat and have a laugh!\n" +
                        "We have Friday Drinks most Fridays, normally involving - Golf IT and other popular games of " +
                        "the week. Countless laughs and fun games to be played!" +
                        "\n\n" +
                        "Also dont forget to check out " + socials + " and " + streamAnnouncements + " if you want to " +
                        "join iRu. Stream Team Flick " + user + " - Matt  a Message!.\n" +
                        "We are always looking for new content / GTX / Hardware / Software / and Games! so if you" +
                        " have something to share SHARE IT ! , in " + setups + " " + memes + " " + tipsAndTricks + " "
                        + clips + " \n" +
                        "Also we have iRu.Gaming Discounts on some products check out " + giveawaysAndDiscounts +
                        "\n\n" +
                        "Love From iRu Family"
                }
            ],
            image: {
                url: message.guild.iconURL,
            },
        }
    };

    message.send(embeddedMessage).catch(console.error);
};
