//04. Given an array of people objects,
//return a new array that has filtered out all those who don't belong to the club.

const onlyGOATPlayers = (arr) => arr.filter(player => player.isGOAT);

console.log(
  onlyGOATPlayers([
    { name: "Messi", isGOAT: true },
    { name: "Ronaldo", isGOAT: false },
    { name: "The REAL Ronaldo", isGOAT: true },
    { name: "Pelé", isGOAT: true },
    { name: "Maradona", isGOAT: false },
    { name: "Mbappé", isGOAT: false },
    { name: "Neymar", isGOAT: false },
  ])
);
