var drumno=document.querySelectorAll(".drum").length;
for(i=0;i<drumno;i++){


document.querySelectorAll(".drum")[i].addEventListener("click",gotClicked);
function gotClicked(){
    var buttonInnerHtml=this.innerHTML;
    makeSound(buttonInnerHtml);
    animationButton(buttonInnerHtml);

}
}
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    animationButton(event.key);
});
 function makeSound(key){
    switch(key){
        case "w":
            var tom1= new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var tom2= new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3= new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
             var tom4= new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
            
        case "j":
            var kick= new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "k":
            var snare= new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "l":
            var crash= new Audio('sounds/crash.mp3');
            crash.play();
            break;
        default:
            console.log(buttonInnerHtml);
    }
 }
 function animationButton(currentKey){
    var eventButton= document.querySelector("." + currentKey);
    eventButton.classList.add("pressed");
    setTimeout(function(){
        eventButton.classList.remove("pressed")},100);
    
 }