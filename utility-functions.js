function display(message) {
  document.write(message);
}
function output(message) {
  window.outputTag.innerHTML = window.outputTag.innerHTML + message;
}

function ask(message) {
  var userText = prompt(message);
  var userNumber = Number(userText);
  var isNotNumber = isNaN(userNumber);
  if (isNotNumber) {
    return userText;
  } else {
    return userNumber;
  }
}





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
  function createColumn(contentString) {
  //TAKES IN CONTENT AND RETURNS A BOOTSTRAP COLUMN STRING
  const columnString = `<div class="col border">${contentString}</div>`;
  return columnString;
}
