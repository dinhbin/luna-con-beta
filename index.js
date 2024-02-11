require('dotenv').config();
const {Client, GatewayIntentBits, EmbedBuilder, SlashCommandBuilder, PermissionsBitField, Permissions} = require('discord.js');
const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.MessageContent]});

client.on("ready", (x) => {
    console.log(`${x.user.tag} đã sẵng sàng!`);
    client.user.setActivity('Bot Beta Nhăm Nhăm');

    const ping = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Đây là lệnh ping bot!');

    const hello = new SlashCommandBuilder()
    .setName('hello')
    .setDescription('Đây là lệnh xin chào bot!');
    
    const bye = new SlashCommandBuilder()
    .setName('bye')
    .setDescription('Đây là lệnh tạm biệt bot!');

    const embed = new SlashCommandBuilder()
        .setName('embed')
        .setDescription('Lệnh embed bot.')

    client.application.commands.create(ping);
    client.application.commands.create(hello);
    client.application.commands.create(bye);
    client.application.commands.create(embed);
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName==='ping') {
        interaction.reply('HeHe tôi Là Luna Con :)) @everyone!');
    }
    if (interaction.commandName==='hello') {
        interaction.reply('Xin chào các con vợ của luna nha :))');
    }
    if (interaction.commandName==='bye') {
        interaction.reply('Tạm Biệt các con vợ của luna nha :))');
    }
    if (interaction.commandName==='embed') {
        interaction.reply('Tạm Biệt các con vợ của luna nha :))');
    }
})

client.login(process.env.TOKEN);