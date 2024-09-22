function convertCard(cardObject) {
  let cardString = '<div class="card">';
  cardString += '<img class="card-image-top" src="' + cardObject.src + '">';
  cardString += '<div class="card-body">';
  cardString += '<h3 class="card-title">' + cardObject.title + "</h3>";
  cardString += cardObject.description;
  cardString += "</div>";
  cardString += "</div>";
  return cardString;
}

let cards = [
  {
    src: "images/1.jpg",
    title: "Card 1",
    description: "This is card 1",
  },
  {
    src: "images/2.jpg",
    title: "Card 2",
    description: "This is card 2",
  },
  {
    src: "images/3.jpg",
    title: "Card 3",
    description: "This is card 3",
  },
];