const friends = ["Maksum", "Oleksii", "Ura", "Andrii", "Maria"];
let result = "";
for (let index = 0; index < friends.length; index += 1) {
  result += friends[index];
  if (index < friends.length - 1) {
    result += ", ";
  }
}
console.log(result);


const newString = friends.join(", ")
console.log(newString);

// ====================================================================

const cards = ["Карточка-1", "Карточка-2", "Карточка-3", "Карточка-4", "Карточка-5"];
const findIndex = cards.indexOf("Карточка-3")
cards.splice(findIndex, 1);
cards.push("Карточка-6");
const findCard = cards.indexOf("Карточка-4");
cards.splice(2, 1, "Нова карточка-4");
console.log(cards);
