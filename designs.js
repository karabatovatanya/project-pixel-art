// Select color input
var color = document.getElementById('#colorPicker');
// Select size input
var height = document.getElementById('#inputHeight');
var width = document.getElementById('#inputWidth');
// When size is submitted by the user, call makeGrid()
var tableSize = document.getElementById('#sizePicker');
tableSize.addEventListener('submit', function (event) {
  event.preventDefault();
  var height = document.getElementById('inputHeight').value;
  var width = document.getElementById('inputWidth').value;
  makeGrid(height, width);
});

function makeGrid(height, width) {
  var table =  document.getElementById('#pixelCanvas');
  for (var i = 1; i <= height; i++) {
    var row = document.createElement('tr');
    for (var j = 1; j <= width; j++) {
      var column = document.createElement('td');
      row.appendChild(column);
    }
    table.appendChild(row)
  }
}
