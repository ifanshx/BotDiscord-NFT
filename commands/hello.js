const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("hello")
    .setDescription("Replies with a hello message."),
  async execute(interaction) {
    const embed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Hello!")
      .setDescription(`Hello, ${interaction.user}!`);

    await interaction.reply({ embeds: [embed] });
  },
};

// new SlashCommandBuilder()
//     .setName("hello")
//     .setDescription("Says hello to someone!")
//     .addUserOption((option) =>
//       option
//         .setName("user")
//         .setDescription("The user to say hi to")
//         .setRequired(false)
//     );
