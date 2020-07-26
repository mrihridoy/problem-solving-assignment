// Feet to Mile count
function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var barishalToNoakhali = feetToMile(528000);
console.log("Barishal to Noakhali Total", barishalToNoakhali, "Mile");



// woodCalculator
function woodCalculator(chair, table, bad){
    var chair = chair * 1;
    var table = table * 3;
    var bad = bad * 5;
    var totalWood = chair + table + bad;
    return totalWood;
}
var firsttCustomer = woodCalculator(14, 2, 6);
console.log(firsttCustomer);




// Brick calculator
function brickCalculator(floor){
    let totalBrick;
    if(floor <=0){
        console.log("Negative value not allowed.");
        return;
    }
    if(floor <= 10){
        totalBrick = floor * 15 * 1000;
    }
    else if(floor <= 20){
        totalBrick = (10 * 15 * 1000) + ((floor - 10) * 12 * 1000);
        return;
    }
    else {
        totalBrick = (10 * 15 & 1000) + (10 * 12 * 1000) + ((floor -20) * 10 * 1000)
    }
    console.log("Total Brick Needed to build the Building: " + totalBrick, "pieces Brick");
}
// Checked Output
brickCalculator(27);



// Tiny Friend finding Programs.
function tinyFriend(friends){
    if (friends.length == 0){
        console.log("Enter your Friends Name");
    }
    let tiny = friends[0];
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length < tiny.length){
            tiny = friends[i];
        }
        
    }
    console.log("Tiny Friend is: " +tiny);
}
// Checked Output
tinyFriend(["Anik", "Mim", "Rakib", "Mohammed", "Khoki"]);

