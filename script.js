var colors = generateRandomColors(6);
var colorPicked = pickColor();
var squares = document.querySelectorAll('.square');
var colorGoal = document.getElementById('colorDisplay');
var correctColor = document.getElementById('correctColor');
var h1 = document.querySelector('h1');

// this is what sets our goal for picking a color
colorGoal.textContent = colorPicked;

for (let i = 0; i < squares.length; i++) {
	// adding colors to each square
	squares[i].style.backgroundColor = colors[i];

	// check to see if the user wins
	squares[i].addEventListener('click', function() {
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === colorPicked) {			
			correctColor.textContent = 'Correct!';
			h1.style.backgroundColor = clickedColor;
			colorChanger(colorPicked);
		}
		else {
			correctColor.textContent = "Sorry please try again :'("
			this.style.backgroundColor = '#232323';
		}
	});
}

function generateRandomColors(difficulty) {
			var colors = [];
	for (let i = 0; i < difficulty; i++) {
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		var color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
		colors.push(color);
	}

	return colors;
}

function colorChanger(color) {
	//loop through squares and change color
	for (let i = 0; i < squares.length; i++) {
		if (squares[i].style.backgroundColor !== color) {
			squares[i].style.backgroundColor = color;
		}
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}






