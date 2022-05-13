// Select color input
var color = document.getElementById('#colorPicker');
// Select size input
var height = document.getElementById('#inputHeight');
var width = document.getElementById('#inputWidth');
var table =  document.getElementById('#pixelCanvas');
// When size is submitted by the user, call makeGrid()
var tableSize = document.getElementById("#sizePicker");
tableSize.addEventListener('submit', function (event) {
  event.preventDefault();
  height = height.val();
  width = widht.val();
  //makeGrid(height, width)
})


