const label = document.querySelectorAll("[class*='col']");
const col1 = document.querySelectorAll("[class*='col1']");
const col2 = document.querySelectorAll("[class*='col2']");
const col3 = document.querySelectorAll("[class*='col3']");
const row1 = document.querySelectorAll("[class*='row1']");
const row2 = document.querySelectorAll("[class*='row2']");
const row3 = document.querySelectorAll("[class*='row3']");

console.log(label);
console.log(col1);
console.log(col2);
console.log(col3);

let arrX = ["X", "X", "X"];
let arrO = ["O", "O", "O"];

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

function areEqual(arr1, arr2){
    let n = arr1.length;
    let m = arr2.length;

    if (n != m)
        return false;

    arr1.sort();
    arr2.sort();

    for (let i = 0; i < n; i++)
        if (arr1[i] != arr2[i])
            return false;

    return true;
}
function winner(){
        let colFirst = [col1.item(0).innerText, col1.item(1).innerText, col1.item(2).innerText];
        let colSecond = [col2.item(0).innerText, col2.item(1).innerText, col2.item(2).innerText];
        let colThird = [col3.item(0).innerText, col3.item(1).innerText, col3.item(2).innerText];

        let rowFirst = [row1.item(0).innerText, row1.item(1).innerText, row1.item(2).innerText];
        let rowSecond = [row2.item(0).innerText, row2.item(1).innerText, row2.item(2).innerText];
        let rowThird = [row3.item(0).innerText, row3.item(1).innerText, row3.item(2).innerText];

        winnerOfX(colFirst)
        winnerOfX(colSecond)
        winnerOfX(colThird)

        winnerOfX(rowFirst)
        winnerOfX(rowSecond)
        winnerOfX(rowThird)

        winnerOfO(colFirst)
        winnerOfO(colSecond)
        winnerOfO(colThird)

        winnerOfO(rowFirst)
        winnerOfO(rowSecond)
        winnerOfO(rowThird)

}

function winnerOfX(arr){
    if(areEqual(arr, arrX) === true){
        console.log("Winner of X!!!")
    }
}
function winnerOfO(arr){
    if(areEqual(arr, arrO) === true){
        console.log("Winner of O!!!")
    }
}

label.forEach( event =>{
    event.addEventListener('click', p =>{
        winner();
        if(p.target.innerText.length === 0){
        circleOrX(p.target);
        }
    })
})
 