

function openNewWindow() {
    window.open("https://www.kia.com", "new-window", "width=800,height=600");
}

function closeWindow() {
    window.close()
}

function decodeString() {          // aGlpIHRoaXMgaXMgYmhhcmF0aA==
    var encoded = document.getElementById("encodedString").value;
    var decoded = atob(encoded);
    document.getElementById("decodedString").innerHTML = decoded;
}

function binaryToAsscii() {
    var plainText = document.getElementById("binarytoasscii").value;
    var binary = btoa(plainText);
    document.getElementById("binaryString").innerHTML = binary;
}

function startTimer() {
    timeoutID = setTimeout(function () {
        alert("Timer completed!");
    }, 3000);
}

function stopTimer() {
    clearTimeout(timeoutID);
    alert("Timer stopped!");
}

//click
var button = document.getElementById("button");
button.addEventListener("click", function () {
    alert("button clicked")
})



//obblur 

// var blurInput = document.getElementById("blur");
// blurInput.addEventListener("blur", function () {
//     console.log("Input lost focus");
// })

// function checkBlur() {
//     const mywindow = window.open("", "", "width=100 , height=100");
//     mywindow.blur();
//     console.log("hii 2 all");

// }

function setFocus() {
    document.getElementById("inputField").focus();
}

function removeFocus() {
    document.getElementById("inputField").blur();
}

//confirm()
function onconfirm() {
    confirm("Press a button!");

    // prompt()
    //    function onprompt(){
    //    var name = prompt("what is the name" , "bharath");
    //    if(name!=null){
    // 	console.log("hello "+ name);
    //    }else {
    // 	console.log("cancelled");
    //    }

    // }

    const image = document.querySelector('#myImage')
    image.addEventListener('mouseover', function () {
        console.log('Mouse over image');
    })
}


// window console
console.log("welcome");
console.error("An error has occurred!");
console.warn("warning");
console.info("The page has finished loading.");
let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

console.table(users);


// window history 

function goBack() {
    window.history.back()
}

function goForward() {
    window.history.forward()
}


//window location 

// function redirectToGoogle() {
//     window.location.href = "https://www.google.com/";
// }


// function modifyUrl() {
//     window.location.hash = "section2";
//     document.getElementById("current-url").textContent = window.location.href;
// }
// document.getElementById("current-url").textContent = window.location.href;

console.log(window.location.href);
console.log(window.location.hostname);
console.log(window.location.pathname);
console.log(window.location.protocol);
console.log(window.location.port);
// window.location.assign("https://www.anandorja.com/about-us")
// console.log();

// window.location.assign("https://www.anandorja.com/about-us")




//============================================//






