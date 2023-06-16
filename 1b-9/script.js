function debug(a){
    alert(a + 1);
}


function tenSteps () {
    for (let i = 0; i <= 9; i ++){
        for (let j = i; j >= 0; j --){
            document.write("TCU");
        }
        document.write("<br>");
    }
}

function nSteps(){
    n = Number(document.getElementById("amount").value) - 1;
    for (let i = 0; i <= n; i ++){
        for (let j = i; j >= 0; j --){
            document.write("TCU");
        }
        document.write("<br>");
    }
}

function nStepsOppsite(){
    m = Number(document.getElementById("amount_opposite").value) - 1;
    for (let i = m; i >= 0; i --){
        for (let j = i; j >= 0; j --){
            document.write("TCU");
        }
        document.write("<br>");
    }
}

// function isPrimeNumber(p){
//     l = Number(p);
//     let smallest_divisor = -100;
//     for (let guess = 0; guess <= l; guess++){
//         if(l % guess == 0 && l != guess && guess != 1 && l != 1){
//             // document.getElementById("result").innerHTML = "素数ではありません";
//             smallest_divisor = guess;
//         }
//     }
//     if (smallest_divisor == -100){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

function displayPrimeNumber(){
    let z = Number(document.getElementById("superValue").value);
    if (isPrimeNumber(z)) {
        document.getElementById("result").innerHTML = z + "は素数です";
    }
    else{
        document.getElementById("result").innerHTML = z + "は素数ではありません";
    }
}

function superValues(){
    let y = Number(document.getElementById("superValue").value);
    for (let guess = 2; guess < y; guess++){
        let flag = 0;
        for (let estimation = 2; estimation < guess; estimation++){
            if(guess % estimation == 0){
                flag = 1;
                break;
            }
        }
        if (flag == 0){
            document.write(guess + "<br>");
        }
    }
}

