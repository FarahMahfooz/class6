var classDay = "wednesday";
if (classDay == "wednesday") {
    console.log("go to class");
}
else {
    console.log("do nothing sleep and have a nice day");
}
var homeFood = "DaalChawal";
var moneyIHave = 300;
var zingerPrice = 350;
if (homeFood === "DaaalChawal" && moneyIHave <= 300) {
    console.log("Go out and buy biryani");
}
else if (moneyIHave >= zingerPrice) {
    console.log("Buy zinger");
}
else {
    console.log("Eat DaalChawal");
}
var isRaining = true;
if (isRaining) {
    console.log("wear a raincoat.");
}
else {
    console.log("wear sunglasses");
}
var eidParty = true;
if (eidParty) {
    console.log("get money from baba");
}
else {
    console.log("be ready for rodha");
}
//switch case
var weekDayNumber = 3;
switch (weekDayNumber) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
    default:
        console.log("invailed day");
        var foodItem = 'Biryani';
        switch (foodItem) {
            case 'Shawarma':
                console.log("i like Shawarma");
                break;
            case 'Pizza':
                console.log(" i love Pizza");
                break;
            case 'Biryani':
                console.log("i like chicken Biryani");
        }
}
