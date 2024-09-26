// function convertCard(cardObject) {
//   let cardString = '<div class="card">';
//   cardString += '<img class="card-image-top" src="' + cardObject.src + '">';
//   cardString += '<div class="card-body">';
//   cardString += '<h3 class="card-title">' + cardObject.title + "</h3>";
//   cardString += cardObject.description;
//   cardString += "</div>";
//   cardString += "</div>";
//   return cardString;
// }


  // const cards = [card1, card2, card3];
        // for (position = 0; position < cards.length; position++) {
        //   const card = cards[position];
        //   const cardString = convertCard(card);
        //   mainTag.innerHTML = mainTag.innerHTML + cardString;
        // }
 
function convertCard(cardObject) {
  const { src = '', title = 'No Title', description = 'No Description' } = cardObject;

  const cardString = `
    <div class="card">
      <img class="card-image-top" src="${src}">
      <div class="card-body">
        <h3 class="card-title">${title}</h3>
        <p>${description}</p>
      </div>
    </div>
  `;

  return cardString;
}
