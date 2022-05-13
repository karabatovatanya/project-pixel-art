// Select color input
var color = document.getElementById('#colorPicker');
// Select size input
var height = document.getElementById('#inputHeight');
var width = document.getElementById('#inputWidth');
// When size is submitted by the user, call makeGrid()
let sizePicker = document.querySelector('#sizePicker');
sizePicker.addEventListener("click", function(event) {
    event.preventDefault();
    makeGrid();
});

function makeGrid() {
  var table = document.querySelector('#pixelCanvas');
  table.innerHTML = "";
  for (var i = 1; i <= height; i++) {
    var row = document.createElement('tr');
    for (var j = 1; j <= width; j++) {
      var column = document.createElement('td');
      row.appendChild(column);
    }
    table.appendChild(row)
  }
  table.addEventListener("click", function(event) {
      event.target.style.backgroundColor = color.value
  })
}
