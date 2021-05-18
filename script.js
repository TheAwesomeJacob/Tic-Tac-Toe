const space = document.querySelectorAll("[class*=square]");
console.log(space);
let img = new Image(150, 150);
img.src = 'blackX.png'

function appendX(value){
    value.innerText = "X";
}
function appnedCircle(value){
    value.innerText = "O";
}

function circleOrX(value){
    switch(value.innerText){
        case "X":
            appnedCircle(value);
            console.log('Im workingX');
            break;
        case "O":
            appendX(value);
            console.log('Im workingO');
            break;
        default:
            appnedCircle(value);
            console.log('Im workingD');
            break;

    }
}

space.forEach( event =>{
    event.addEventListener('click', p =>{
        circleOrX(p.target);
    })
})
 