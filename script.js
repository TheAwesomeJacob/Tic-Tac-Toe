const label = document.querySelectorAll("[class*='col']");
const col1 = document.querySelectorAll("[class*='col1']");
const col2 = document.querySelectorAll("[class*='col2']");
const col3 = document.querySelectorAll("[class*='col3']");

console.log(label);
console.log(col1);
console.log(col2);
console.log(col3);

function appendX(value){
    value.innerText = "X";
}
function appendCircle(value){
    value.innerText = "O";
}

let player = true;

function circleOrX(value){
    if(player === true){
        appendX(value);
        player = false;
    }else if(player === false){
        appendCircle(value);
        player = true;
    }
}
function winner(){
    
}

label.forEach( event =>{
    event.addEventListener('click', p =>{
        if(p.target.innerText.length === 0){
        circleOrX(p.target);
        }
    })
})
 