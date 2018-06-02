var numSquares = 6;
var colors = generateRandomColor(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var headingBackground = document.querySelector("header h1");
var winInfo = document.querySelector(".winInfo");
var tryAgainBtn = document.querySelector(".newBtn");
var easy = document.querySelector(".easyBtn");
var hard = document.querySelector(".hardBtn");

//to display chosed rgba color 
colorDisplay.textContent = pickedColor;


//To change the background color of all the boxex and heading background on correct click
function changeColor() {
    squares.forEach(function(box) {
        box.style.backgroundColor = pickedColor;
    });
    headingBackground.style.backgroundColor = pickedColor;
}

//picking random color
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//Generating the random color 
function generateRandomColor(num) {
    //make an array
    var colorArr = []; 
    //function to get random colors
    for(var i = 0; i<num ;i++) {
        colorArr.push(randomColor());
    }
    //return that random color
    return colorArr;
}

//Function to get random color for array
function randomColor() {
    //generate color for red
    var r = Math.floor(Math.random() * 256);
    //generate color for green
    var g = Math.floor(Math.random() * 256);
    //generate color for blue
    var b = Math.floor(Math.random() * 256);
    //return the string with all the colors
    return "rgb("+ r + ", " + g + ", " + b + ")";
}


for(var i = 0; i<squares.length; i++) {
    squares[i].style.backgroundColor = colors[i]; //changing the background color of boxes
    squares[i].addEventListener("click", function() {
        //Hun color color box click ho gea and we will get the color code of clicked one
        var clickedColor = this.style.backgroundColor;
        /* Now it will check whether the color code of clicked box is
         same with the picked one.*/
         if(clickedColor === pickedColor){
             changeColor();
             winInfo.textContent = "Correct!"
             tryAgainBtn.textContent = "play again?"
         }
         else{
            this.style.backgroundColor = "#f1f1f1";
            winInfo.textContent = "Try Again"
         }
    })
}

tryAgainBtn.addEventListener("click", function() {
    //genarate all new colors
     colors = generateRandomColor(numSquares);
    //pick new random color from array
     pickedColor = pickColor();
     //change the display
     colorDisplay.textContent = pickedColor;
    //change the colors of squares
    for(var i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    //Changing the header background to normal
    headingBackground.style.backgroundColor = "blue";
    //Changing try again to new colors
    tryAgainBtn.textContent = "New Colors";
    //changing back wininfo to none
    winInfo.textContent = "";
})

// Easy Button

easy.addEventListener("click", function() {
    easy.classList.add("selected");
    hard.classList.remove("selected");
    //genarate all new colors
    numSquares = 3;
    colors = generateRandomColor(numSquares);
    //pick new random color from array
     pickedColor = pickColor();
     //change the display
     colorDisplay.textContent = pickedColor;
     //changin colors of boxes
     for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
})

//hard button
hard.addEventListener("click", function() {
    hard.classList.add("selected");
    easy.classList.remove("selected");
     //genarate all new colors
     numSquares = 6;
     colors = generateRandomColor(numSquares);
     //pick new random color from array
      pickedColor = pickColor();
      //change the display
      colorDisplay.textContent = pickedColor;
           //changin colors of boxes
           for(var i=0;i<squares.length;i++) {
               squares[i].style.backgroundColor = colors[i];
               squares[i].style.display = "block";
           }
})