// // variable for selcting all drum buttons
// var bandButton = document.querySelectorAll(".drum");

// // loop for assigning listener to every button
// for (var i = 0; i < bandButton.length; i++) {
//     // function to listen for click on buttons and play sound accordingly
//     bandButton[i].addEventListener("click", function () {
//         makeSound(this.innerHTML) // reads the text of button and plays sound
//         buttonAnimation(this.innerHTML); // adds animation on click
//     });
// }

// // function for listening to key presses 
// document.addEventListener("keydown", function (event) {
//     makeSound(event.key);
//     buttonAnimation(event.key);
// });

// // funtion to play sound accroding to which key is pressed
// function makeSound(key) {
//     switch (key) {

//         case "w":
//             var audio = new Audio("sounds/tom-1.mp3");
//             audio.play();
//             break;

//         case "a":
//             var audio = new Audio("sounds/crash.mp3");
//             audio.play();
//             break;

//         case "s":
//             var audio = new Audio("sounds/tom-3.mp3");
//             audio.play();
//             break;

//         case "d":
//             var audio = new Audio("sounds/kick-bass.mp3");
//             audio.play();
//             break;

//         case "j":
//             var audio = new Audio("sounds/tom-4.mp3");
//             audio.play();
//             break;

//         case "k":
//             var audio = new Audio("sounds/snare.mp3");
//             audio.play();
//             break;

//         case "l":
//             var audio = new Audio("sounds/tom-2.mp3");
//             audio.play();
//             break;

//         default:
//             console.log(this.innerHTML)
//             break;
//     }
// }

// // function for animating the click on button
// function buttonAnimation(keypressed) {
//     var button = document.querySelector("." + keypressed); // selects the button by their class
//     button.classList.add("pressed");    // adds the pressed class to the button 
//     button.classList.add("black");      // changes the color of test inside button

//     // removes both classes after 100ms
//     setTimeout(function () {
//         button.classList.remove("pressed");
//         button.classList.remove("black");
//     }, 100);
// }



/*-------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------Same code in jQuery---------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------*/

// function to listen for click on buttons and play sound accordingly
$(".drum").on("click", function () {
    makeSound(this.innerHTML)           // reads the text of button and plays sound
    buttonAnimation(this.innerHTML);    // adds animation on click
});

$("body").on("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function buttonAnimation(keypressed) {
    $("." + keypressed).addClass("pressed");
    $("." + keypressed).addClass("black");
    setTimeout(function () {
        $("." + keypressed).removeClass("pressed");
        $("." + keypressed).removeClass("black");
    }, 100);
}

function makeSound(key) {
    switch (key) {

        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        default:
            console.log(key)
            break;
    }
}