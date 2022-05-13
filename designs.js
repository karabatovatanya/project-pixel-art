// Select color input
var color = document.getElementById('#colorPicker');
// Select size input
var height = document.getElementById('#inputHeight');
var width = document.getElementById('#inputWidth');
// When size is submitted by the user, call makeGrid()
var tableSize = document.getElementById("#sizePicker");
tableSize.addEventListener('submit', function (event) {
  event.preventDefault();
  makeGrid(height, width)
})

function makeGrid(height, width) {
  var table =  document.getElementById('#pixelCanvas');
  var rows = height.value;
  var columns = width.value;
  for (var i = 1; i <= rows; i++) {
    var row = document.createElement('tr');
    for (var j = 1; j <= columns; j++) {
      var column = document.createElement('td');
      row.appendChild(column);
    }
    table.appendChild(row)
  }
}
