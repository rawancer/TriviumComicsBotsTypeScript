import { database } from "..";
import { d20 } from "../clients";
import { accountForPrestige, createCard, getLevel, getLevelCost, getposition } from "../d20/function";
const defaultstyle = {
    type: 'normal',
    color: '#00FFFF',
    colorb: '#000000',
}

const defaultstats = {
    sleep: 0,
    lamp: 0,
    box: 0,
    kill: 0,
    popcorn: 0,
    spare: 0,
    yeet: 0,
    punch: 0,
    kick: 0,
}

d20.on('messageCreate', async (msg) => {
    if (!msg || !msg.member || !msg.author || msg.author.bot) return;
    // if (msg.channelId != testChannelId) return;
    let args = msg.content;
    if (args.startsWith('!')) {
        args = args.replace(/!/, '');
        switch (args.split(' ')[0]) {
            case 'card':
                msg.channel.sendTyping();
                let target = msg.mentions.members?.first();
                if (!target) target = msg.member;

                let messages = await (await database.child('lvl/' + msg.guildId + '/' + target.id).once('value')).val();

                let prestige = await (await database.child('prestige/' + msg.guildId + '/' + target.id).once('value')).val();
                let style = await (await database.child(`card/` + target.id).once('value')).val();
                let stats = await (await database.child('stats/' + target.id).once('value')).val();
                let warnings_aux = await (await database.child('warnings/' + msg.guildId + '/' + target.id).once('value')).val();
                let guild = await (await database.child('guild/' + target.id).once('value')).val();
                if (guild) guild = guild[0];

                let messages_accounted_for_prestige = accountForPrestige(messages, prestige);
                let level = getLevel(messages, prestige);
                let level_cost = getLevelCost(level);
                let level_cost_next = getLevelCost(level + 1);
                let position = await getposition(target.id);

                if (!style)
                    style = defaultstyle;
                else {
                    if (!style['type']) style['type'] = defaultstyle['type'];
                    if (!style['color']) style['color'] = defaultstyle['color'];
                    if (!style['colorb']) style['colorb'] = defaultstyle['colorb'];
                }

                if (!stats) stats = defaultstats;

                let date = target.joinedAt;
                let now = new Date(Date());
                if (!date) date = now;
                let months = (((now.getUTCFullYear() - date.getUTCFullYear()) * 12) + (now.getUTCMonth() - date.getUTCMonth()));


                let nextlevel_min_messages = level_cost_next;
                let message_to_levelup = level_cost_next - messages_accounted_for_prestige;


                let percentage = (messages_accounted_for_prestige - level_cost) / (level_cost_next - level_cost);
                let warnings = 0;
                if (warnings_aux && typeof warnings_aux == 'object' && warnings_aux.length) warnings = warnings_aux.length;

                let card = (await createCard({
                    avatar_url: target.user.displayAvatarURL({ format: 'png', size: 1024 }),
                    target: target,
                    level: level,
                    message_to_levelup: message_to_levelup,
                    messages: messages,
                    nextlevel_min_messages: nextlevel_min_messages,
                    percentage: percentage,
                    position: position,
                    time_on_server: months,
                    username: target.displayName,
                    warnings: warnings,
                    xp_bar: {
                        style: style['type'],
                        color_a: style['color'],
                        color_b: style['color2']
                    },
                    guild: guild,
                    prestige: prestige,
                    title: style['title'],
                    stats: stats
                })).toBuffer();
                msg.channel.send({ files: [card] });
                break;
        }
    }
})