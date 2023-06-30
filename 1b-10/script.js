let fruits = ['apple', 'banana', 'cherry', 'mango'];

function arrayFruits() {
    for(let i = 0; i < fruits.length; i++){
        alert(fruits[i]);
    }
}

function reverseFruits(){
    for(let i = 0; i < fruits.length; i++){
        alert(fruits.reverse()[i]);
    }
}

function randomNums() {
    let rand = [];
    for(let i = 0; i < 1000; i++){
        rand.push(Math.random());
    }
    for(let i = 0; i < rand.length; i++){
        document.write(rand[i],"<br>");
    }
}

function displayNumbers(){
    let x = [];
    for(let i = 0; i <= 99; i++){
        x.push(i);
    }
    for(let i = 0; i < x.length; i++){
        x[i] = x[i] ** 2;
    }
    alert(x);
}

// function janken(){
//     let hands = ["グー","チョキ","パー"];
//     let cpushand = hands[Math.floor(Math.random() * 3)];
//     let playershand = document.getElementById("playerHand").value;
//     if (cpushand == "グー") {
//         if (playershand == "パー"){
//             alert()
//         }
//     }
// }