function checkValue(name){
    let elements = document.getElementsByName(name);
    let len = elements.length;
    let checkValue = '';

    for (let i = 0; i < len; i++){
        if (elements.item(i).checked){
            checkValue = elements.item(i).value;
        }
    }
    return checkValue;
}

function displayInfo(){
    const gender = checkValue("gender");
    const blood_type = checkValue("blood_type");
    alert("あなたは" + gender + "で" + "血液型は" + blood_type + "型ですね。");
}


function displayPrice(){
    let price = 0;
    let fruits = document.getElementsByName("fruits");
    let value = 0;
    for(let j = 0; j < 3; j++){
        if(fruits.item(j).checked){
            price += Number(fruits.item(j).value);
        }
    }
    alert("合計金額は"+price);
}