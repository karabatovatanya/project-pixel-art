// Select color input
var colorPicker = document.querySelector('#colorPicker');
// Select size input
var height = document.querySelector('#inputHeight');
var width = document.querySelector('#inputWidth');
// When size is submitted by the user, call makeGrid()
let sizePicker = document.querySelector('#sizePicker');
sizePicker.addEventListener("click", function (event) {
    event.preventDefault();
    var height = document.querySelector('#inputHeight').value;
    var width = document.querySelector('#inputWidth').value;
    makeGrid(height, width);
});
// Create a grid
function makeGrid(height, width) {
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
  // Color the pixels
  table.addEventListener("click", function (event) {
      event.target.style.backgroundColor = colorPicker.value;
  });
}
