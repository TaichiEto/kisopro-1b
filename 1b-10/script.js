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

function janken(){
    let playerHand = convertHands(document.getElementById("playerHand").value);
    let cpuhand = Math.floor(Math.random() * 3);
    if (cpuhand == 0){
        if(playerHand == 2){
            alert("私は「グー」であなたの勝ちです");
        }
        else if(playerHand == 0){
            alert("私は「グー」であいこです");
        }
        else{
            alert("私は「グー」であなたの負けです");
        }
    }

    else if(cpuhand == 1){
        if(playerHand == 2){
            alert("私は「チョキ」であなたの負けです");
        }
        else if(playerHand == 0){
            alert("私は「チョキ」であなたの勝ちです");
        }
        else{
            alert("私は「チョキ」であいこです");
        }
    }

    else {
        if(playerHand == 2){
            alert("私は「パー」であいこです");
        }
        else if(playerHand == 0){
            alert("私は「パー」であなたの負けです");
        }
        else{
            alert("私は「パー」であなたの勝ちです");
        }
    }
}

function convertHands(hand){
    if (hand == "グー"){
        return 0;
    }
    else if (hand == "チョキ"){
        return 1;
    }
    else if (hand == "パー"){
        return 2;
    }
}