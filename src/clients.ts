import { Client, Intents, WebhookClient } from "discord.js";
import { config } from "dotenv";
import { testing } from ".";
import { eli_activities } from "./eli/activities";
import { krystal_activities } from "./krystal/activities";
import { ray_activities } from "./ray/activities";
import { sadie_activities } from "./sadie/activities";
config();


export const krystal = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_INTEGRATIONS]
});
krystal.login(process.env.BOT_KRYSTAL_TOKEN);
krystal.on('ready', () => {
    console.log(`${krystal.user ? krystal.user.tag : "Sadie"} is ready!!!`);
    krystal_activities[Math.floor(Math.random() * krystal_activities.length)]();
    setInterval(() => { krystal_activities[Math.floor(Math.random() * krystal_activities.length)](); }, 1800000);
});

export const sadie = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
sadie.login(process.env.BOT_SADIE_TOKEN);
sadie.on('ready', () => {
    console.log(`${sadie.user ? sadie.user.tag : "Sadie"} is ready!!!`);
    sadie_activities[Math.floor(Math.random() * sadie_activities.length)]();
    setInterval(() => { sadie_activities[Math.floor(Math.random() * sadie_activities.length)](); }, 1800000);
});

export const d20 = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_INTEGRATIONS]
});
d20.login(process.env.BOT_D20_TOKEN);
d20.on('ready', () => { console.log(`${d20.user ? d20.user.tag : "D20"} is ready!!!`) });


export const ray = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
ray.login(process.env.BOT_RAY_TOKEN);
ray.on('ready', () => {
    console.log(`${ray.user ? ray.user.tag : "Ray"} is ready!!!`);
    ray_activities[Math.floor(Math.random() * ray_activities.length)]();
    setInterval(() => { ray_activities[Math.floor(Math.random() * ray_activities.length)](); }, 1800000);
});


export const eli = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
eli.login(process.env.BOT_ELI_TOKEN);
eli.on('ready', () => {
    console.log(`${eli.user ? eli.user.tag : "Eli"} is ready!!!`);
    eli_activities[Math.floor(Math.random() * eli_activities.length)]();
    setInterval(() => { eli_activities[Math.floor(Math.random() * eli_activities.length)](); }, 1800000);
});

export const mod_alert_webhook = (testing: boolean) => testing ?
    new WebhookClient({
        url: "https://discord.com/api/webhooks/900374491916558386/w1tTmMj9W7ycpYBUNwMYC0eW_K00kJMGGKJO8pax85Ztu2HFWqDq71Rs5jffzf-EQv1N"
    }) :
    new WebhookClient({
        url: "https://discord.com/api/webhooks/900363561019269130/1qlWM7j3zBdP_OC7GdZReUbFAobAunEcr6uOWNC3HA67_brENhnoSBnO-CJLnZXRvgTH"
    });

export const clients: { [bot: string]: Client } = {
    'd20': d20,
    'sadie': sadie,
    'krystal': krystal,
    'eli': eli,
    'ray': ray,
}