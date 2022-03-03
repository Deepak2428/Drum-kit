
var allButtons=document.querySelectorAll("button");
for(let i=0;i<allButtons.length;i++)
{
    allButtons[i].addEventListener("click",clicked);
}

function clicked()
{
    var button=this.textContent;
    switch(button)
    {
        case "w":
            var audio= new Audio("./sounds/tom-1.mp3");
            audio.play(audio);
            break;
        case "a":
            var audio= new Audio("./sounds/tom-2.mp3");
            audio.play(audio);
            break;
        case "s":
            var audio= new Audio("./sounds/tom-3.mp3");
            audio.play(audio);
            break;
        case "d":
            var audio= new Audio("./sounds/tom-4.mp3");
            audio.play(audio);
            break;

         case "j":
            var audio= new Audio("./sounds/snare.mp3");
            audio.play(audio);
            break;

        case "k":
            var audio= new Audio("./sounds/crash.mp3");
            audio.play(audio);
            break;
    
       case "l":
            var audio= new Audio("./sounds/kick-bass.mp3");
            audio.play(audio);
            break;   
    }

    var clickedButton=document.querySelector("."+button);
    clickedButton.classList.add("pressed");


    setTimeout(function()          // after 3 sec this function will remove the pressed class and thus animation
    {
        clickedButton.classList.remove("pressed");
    },200)     //200 milliseconds

}

//when button is pressed

document.addEventListener("keydown",function(event){ // event can be passed  it contains which key was pressed,key code, character code
    pressed(event.key);



})


function pressed(key)
{
    switch(key)
    {
        case "w":
            var audio= new Audio("./sounds/tom-1.mp3");
            audio.play(audio);
            break;
        case "a":
            var audio= new Audio("./sounds/tom-2.mp3");
            audio.play(audio);
            break;
        case "s":
            var audio= new Audio("./sounds/tom-3.mp3");
            audio.play(audio);
            break;
        case "d":
            var audio= new Audio("./sounds/tom-4.mp3");
            audio.play(audio);
            break;

         case "j":
            var audio= new Audio("./sounds/snare.mp3");
            audio.play(audio);
            break;

        case "k":
            var audio= new Audio("./sounds/crash.mp3");
            audio.play(audio);
            break;
    
       case "l":
            var audio= new Audio("./sounds/kick-bass.mp3");
            audio.play(audio);
            break;   
    }

    var pressedKey=document.querySelector("."+key);
    pressedKey.classList.add("pressed");

    setTimeout(function()          // after 3 sec this function will remove the pressed class and thus animation
        {
            pressedKey.classList.remove("pressed");
        },200)
}