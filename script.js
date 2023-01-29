//Event listener
document.getElementById("done-btn").addEventListener("click", buildMadLib);

//Event function
function buildMadLib() {
    //Input
    let foodItem = document.getElementById("food-item").value;
    let number = document.getElementById("number").value;
    let measurement = document.getElementById("measurement").value;
    let adjective = document.getElementById("adjective").value;
    let verb = document.getElementById("verb").value;
    let adjective2 = document.getElementById("adjective2").value;
    let adverb = document.getElementById("adverb").value;
    let verb2 = document.getElementById("verb2").value;
    let adjective3 = document.getElementById("adjective3").value;
    let noun = document.getElementById("noun").value;
    let adjective4 = document.getElementById("adjective4").value;
    let verb3 = document.getElementById("verb3").value;
    let adjective5 = document.getElementById("adjective5").value;
    let noun2 = document.getElementById("noun2").value;
    let verb4 = document.getElementById("verb4").value;
    let adjective6 = document.getElementById("adjective6").value;
    let noun3 = document.getElementById("noun3").value;
    let adjective7 = document.getElementById("adjective7").value;

    //Process
    let result = `To make ${foodItem} you first need to gather your ingredients. You'll need ${number} eggs, a ${measurement} of milk, flour, sugar, and ${adjective} butter. Start by ${verb} together the ${adjective2} ingredients in a bowl. Then, ${adverb} ${verb2} in the milk, eggs, and ${adjective3} butter. Once the ${noun} is ${adjective4}, you're ready to ${verb3}! Scoop the batter onto a/an ${adjective5} ${noun2} and cook until all the bubbles ${verb4}. The ${adjective6} part about making ${foodItem} is piling them onto your ${noun3}, loading them with your ${adjective7} toppings, and digging in!`;

    //Hide form
    document.getElementById("form").style.display = "none";

    //Output
    document.getElementById("result").innerHTML = result;

}
