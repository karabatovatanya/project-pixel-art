// Select color input
var color = document.getElementById('#colorPicker');
// Select size input
var height = document.getElementById('#inputHeight');
var width = document.getElementById('#inputWidth');
var table =  document.getElementById('#pixelCanvas')
// When size is submitted by the user, call makeGrid()
var tableSize = document.getElementById("#sizePicker");
tableSize.addEventListener('submit', function (event) {
  event.preventDefault();
  makeGrid(height.value, width.value)
  }

function makeGrid(height.value, width.value) {
  for (var i = 1; i <= height; i++) {
    var row = table.createElement('tr');
    table.appendChild(row);
    for (var j = 1; j <= width; j++) {
      var column = table.createElement('td');
      column.appendChild(column);
    }
  }
}
