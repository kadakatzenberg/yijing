const Discord = require('discord.js');

const client = new Discord.Client();

const hexagrams = [
  { name: 'Hexagram 1', meaning: 'Heaven - Qian/Qian' },
  { name: 'Hexagram 2', meaning: 'Earth - Kun/Kun' },
  { name: 'Hexagram 3', meaning: 'Beginning - Kan/Zhen' },
  { name: 'Hexagram 4', meaning: 'Bliss - Gen/Kan' },
  { name: 'Hexagram 5', meaning: 'Waiting - Kan/Qian' },
  { name: 'Hexagram 6', meaning: 'Litigation - Qian/Kan' },
  { name: 'Hexagram 7', meaning: 'Officer - Kun/Kan' },
  { name: 'Hexagram 8', meaning: 'Alliance - Kan/Kun' },
  { name: 'Hexagram 9', meaning: 'Small Livestock - Xun/Qian' },
  { name: 'Hexagram 10', meaning: 'Tread - Qian/Dui' },
  { name: 'Hexagram 11', meaning: 'Unity - Kun/Qian' },
  { name: 'Hexagram 12', meaning: 'Stagnation - Qian/Kun' },
  { name: 'Hexagram 13', meaning: 'Fellowship - Qian/Li' },
  { name: 'Hexagram 14', meaning: 'Great Reward - Li/Qian' },
  { name: 'Hexagram 15', meaning: 'Humility - Kun/Gen' },
  { name: 'Hexagram 16', meaning: 'Delight - Zhen/Kun' },
  { name: 'Hexagram 17', meaning: 'Following - Dui/Zhen' },
  { name: 'Hexagram 18', meaning: 'Poison - Gen/Xun' },
  { name: 'Hexagram 19', meaning: 'Arriving - Kun/Dui' },
  { name: 'Hexagram 20', meaning: 'Observation Xun/Kun' },
  { name: 'Hexagram 21', meaning: 'Biting - Li/Zhen' },
  { name: 'Hexagram 22', meaning: 'Beauty - Gen/Li' },
  { name: 'Hexagram 23', meaning: 'Peel - Gen/Kun' },
  { name: 'Hexagram 24', meaning: 'Returning - Kun/Zhen' },
  { name: 'Hexagram 25', meaning: 'Without Wrongdoing - Qian/Zhen' },
  { name: 'Hexagram 26', meaning: 'Big Livestock - Gen/Qian' },
  { name: 'Hexagram 27', meaning: 'Nourish - Gen/Zhen' },
  { name: 'Hexagram 28', meaning: 'Great Exceeding Dui/Xun' },
  { name: 'Hexagram 29', meaning: 'Water - Kan/Kan' },
  { name: 'Hexagram 30', meaning: 'Fire - Li/Li' },
  { name: 'Hexagram 31', meaning: 'Influence Dui/Gen' },
  { name: 'Hexagram 32', meaning: 'Consistency -Zhen/Xun' },
  { name: 'Hexagram 33', meaning: 'Retreat - Qian/Gen' },
  { name: 'Hexagram 34', meaning: 'Great Strength - Zhen/Qian' },
  { name: 'Hexagram 35', meaning: 'Advancement - Li/Kun' },
  { name: 'Hexagram 36', meaning: 'Dimming Light - Kun/Li' },
  { name: 'Hexagram 37', meaning: 'Family - Xun/Li' },
  { name: 'Hexagram 38', meaning: 'Opposition - Li/Dui' },
  { name: 'Hexagram 39', meaning: 'Obstruction Kan/Gen' },
  { name: 'Hexagram 40', meaning: 'Relief - Zhen/Kan' },
  { name: 'Hexagram 41', meaning: 'Decreasing - Gen/Dui' },
  { name: 'Hexagram 42', meaning: 'Increasing - Xun/Zhen' },
  { name: 'Hexagram 43', meaning: 'Eliminating - Dui/Qian' },
  { name: 'Hexagram 44', meaning: 'Meeting - Qian/Xun' },
  { name: 'Hexagram 45', meaning: 'Gathering - Dui/Kun' },
  { name: 'Hexagram 46', meaning: 'Rising - Kun/Xun' },
  { name: 'Hexagram 47', meaning: 'Trap - Dui/Kan' },
  { name: 'Hexagram 48', meaning: 'Well - Kan/Xun' },
  { name: 'Hexagram 49', meaning: 'Reform - Dui/Li' },
  { name: 'Hexagram 50', meaning: 'The Cauldron - Li/Xun' },
  { name: 'Hexagram 51', meaning: 'Thunder - Zhen/Zhen' },
  { name: 'Hexagram 52', meaning: 'Mountain - Gen/Gen' },
  { name: 'Hexagram 53', meaning: 'Gradual Progress - Xun/Gen' },
  { name: 'Hexagram 54', meaning: 'Marrying Maiden - Zhen/Dui' },
  { name: 'Hexagram 55', meaning: 'Abundance - Zhen/Li' },
  { name: 'Hexagram 56', meaning: 'Travelling - Li/Gen' },
  { name: 'Hexagram 57', meaning: 'Wind - Xun/Xun' },
  { name: 'Hexagram 58', meaning: 'Marsh Dui/Dui' },
  { name: 'Hexagram 59', meaning: 'Dispersing - Xun/Kan' },
  { name: 'Hexagram 60', meaning: 'Regulate - Kan/Dui' },
  { name: 'Hexagram 61', meaning: 'Sincerity Xun/Dui' },
  { name: 'Hexagram 62', meaning: 'Lesser Exceeding - Zhen/Gen' },
  { name: 'Hexagram 63', meaning: 'Accomplished Kan/Li' },
  { name: 'Hexagram 64', meaning: 'Not Yet Accomplished Li/Kan' },
];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.content === '!hexagram') {
    const randomIndex = Math.floor(Math.random() * hexagrams.length);
    const hexagram = hexagrams[randomIndex];
    message.channel.send(`The hexagram for today is ${hexagram.name}: ${hexagram.meaning}`);
  }
});

client.login('MTA5ODQzMTA3MDA2OTg3MDYzMg.GAGAlX.rGDOZOGqhrg4cBqybucS-0W-c3h5YQoDSWaepY');
