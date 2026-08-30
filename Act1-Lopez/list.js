const addBtn = document.getElementById("addBtn");
const myList = document.getElementById("myList");

const games = ["Roblox", "Valorant", "GTA 5", "Dota", "Counter-strike", "PUBG"];

let count = 0;

const longGame = games.find(function (game) {
  return game.length > 5;
});
console.log("First game longer than 5 letters:", longGame);

const gamesWithG = games.filter(function (game) {
  return game.startsWith("G");
});
console.log("Games starting with G:", gamesWithG);

addBtn.addEventListener("click", function () {
  const newItemText = games[count % games.length];
  count++;

  const li = document.createElement("li");
  li.textContent = newItemText;
  myList.appendChild(li);
});
