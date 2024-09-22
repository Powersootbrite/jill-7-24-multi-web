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
function createCards (card1, card2, card3) {
  let cardString = convertCard( card1 );
  cardString += convertCard( card2 );
  cardString += convertCard( card3 );
  
}
