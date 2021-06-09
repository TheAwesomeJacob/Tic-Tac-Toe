const label = document.querySelectorAll("[class*='col']");
let pointsX = document.querySelector(".pointsOfX");
let pointsO = document.querySelector(".pointsOfO");

const col = {
    col1: document.querySelectorAll("[class*='col1']"),
    col2: document.querySelectorAll("[class*='col2']"),
    col3: document.querySelectorAll("[class*='col3']")
}

const row = {
    row1: document.querySelectorAll("[class*='row1']"),
    row2: document.querySelectorAll("[class*='row2']"),
    row3: document.querySelectorAll("[class*='row3']")
}

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
    
        let colFirst = [col.col1.item(0).innerText, col.col1.item(1).innerText, col.col1.item(2).innerText];
        let colSecond = [col.col2.item(0).innerText, col.col2.item(1).innerText, col.col2.item(2).innerText];
        let colThird = [col.col3.item(0).innerText, col.col3.item(1).innerText, col.col3.item(2).innerText];

        let rowFirst = [row.row1.item(0).innerText, row.row1.item(1).innerText, row.row1.item(2).innerText];
        let rowSecond = [row.row2.item(0).innerText, row.row2.item(1).innerText, row.row2.item(2).innerText];
        let rowThird = [row.row3.item(0).innerText, row.row3.item(1).innerText, row.row3.item(2).innerText];

        let arrOfRowsAndColumns = [colFirst, colSecond, colThird, rowFirst, rowSecond, rowThird];

        for (let index = 0; index < arrOfRowsAndColumns.length; index++) {
            winnerOfX(arrOfRowsAndColumns[index]);
            winnerOfO(arrOfRowsAndColumns[index]);
        }
}

let counter = 0;

function winnerOfX(arr){
    if(areEqual(arr, arrX) === true){
        console.log("Winner of X!!!")
        ++counter;
        pointsX.innerText = counter;
    }
}
function winnerOfO(arr){
    if(areEqual(arr, arrO) === true){
        console.log("Winner of O!!!")
        ++counter;
        pointsO.innerText = counter;
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
 