// mouse event

function displayMessage() {
    alert("You clicked the button!");
}

function changeColor() {
    document.body.style.backgroundColor = "yellow";
}

function showAlert() {
    alert("You right-clicked on the blue box");
}

function changeColor() {
    document.getElementById("onMouseDown").style.backgroundColor = "blue";
}

// keyboard event 

const input = document.getElementById('Input');


input.addEventListener('keyup', function (event) {
    console.log('You pressed the key: ' + event.key);
});
input.addEventListener('keydown', function (event) {
    console.log('You released the key: ' + event.key);
});
