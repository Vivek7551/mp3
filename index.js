const foodInfo = require('./food.json');

//list all the food items
function listItems(){
    return foodInfo;
}

//food items with category vegetables
function vegetables(){
    return foodInfo.filter((n) => n.category==='Vegetable');
}

//food items with category fruit
function fruit(){
    return foodInfo.filter((n) => n.category==='Fruit');
}

//food items with category protein
function protein(){
    return foodInfo.filter(n => n.category==='Protein');
}

//food items with category nuts
function nuts(){
    return foodInfo.filter(n => n.category==='Nuts');
}

//food items with category grains
function grains(){
    return foodInfo.filter(n => n.category==='Grains');
}

//food items with category dairy
function dairy(){
    return foodInfo.filter(n => n.category==='Dairy');
}

//food items with calorie above 100
function calAbove100(){
    return foodInfo.filter(n => n.calorie>100);
}

//food items with calorie below 100
function calBelow100(){
    return foodInfo.filter(n => n.calorie<100);
}

//food items with highest protein content to lowest
function proteinContent(){
    return foodInfo.sort((a,b)=>b.protiens-a.protiens);
}

//food items with lowest carb content to highest
function carbContent(){
    return foodInfo.sort((a,b)=>a.cab-a.cab);
}
