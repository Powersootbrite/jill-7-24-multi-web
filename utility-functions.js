
function convertCard(cardObject) {
  //TEMPLATE STRING - SEE strings.html FOR MORE INFO
  let cardString = 
   `<div class="card">;
      <img class="card-img-top" src="${cardObject.src}"/>
      <div class="card-body">
        <h3 class="card-title">${cardObject.title}</h3>
        ${cardObject.description}
      </div>
    </div>`;
  return cardString;
}