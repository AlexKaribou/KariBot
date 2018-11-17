//NE PAS TOUCHER 

const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs")

const prefix = "k!";

bot.on("ready", function(){
    bot.user.setActivity("KariBot by 🍫~Alex~Kārįbøu~� | k!hulp�", {type: "STREAMING"})
    console.log(`${bot.user.username} est online !`)
  });

bot.login(process.env.TOKEN)

// MENUS D'AIDE !


bot.on('message', message => {
    if(message.content.startsWith(prefix + 'help')){
        var helpembed = new Discord.RichEmbed()
    .setColor(0x00000)
    .setDescription("\n __**Commandes Funs**__ \n  \n k!roll [plus haut nombre] ```Permet de choisir un nombre aléatoire``` \n k!avatar ```Permet d'afficher l'avatar de la personne mentionnée, si pas de mention c'est votre avatar``` \n k!8ball ```Permet de poser une question au bot``` \n k!pof ```Permet de jouer à Pile Ou Face``` \n k!hug ```Permet de faire un câlin à la personne mentionnée``` \n \n __**Commandes De Modération**__ \n \n​     \n k!purge [nombre de messages à supprimer]\n ```Permet d'effacer entre deux et 100 messages``` \n k!kick [utilisateur à kick] [raison] \n ```Permet de kick quelqu'un``` \n  k!ban [utilisateur à bannir] [raison] \n ```Permet de bannir quelqu'un``` \n k!say \n ```Permet de parler avec le bot``` \n \n __**Commandes Utiles**__ \n \n​     k!info \n ```Permet d'afficher les infos de la personne mentionnée, si pas de mention c'est vos infos```\n k!serveur \n ```Permet d'afficher les informations relatives au serveur``` \n k!bot  \n ```Permet d'affichers les informations concernant le bot```\n ")
    .setTimestamp()
    .setFooter(`Help | Demandé par ${message.author.username}`)
    message.channel.send(helpembed)

    }
});
