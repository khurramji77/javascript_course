let length;
let width;

function calculateArea(){
    length = parseFloat(document.getElementById("length").value);
    width = parseFloat(document.getElementById("width").value);

    let area = length * width;
    document.getElementById("result").innerText = `The area of the rectangle is: ${area}`
}

function groceryTracker(){
    let grocery1Amt = parseFloat(document.getElementById("grocery1").value);
    let grocery2Amt = parseFloat(document.getElementById("grocery2").value);
    let grocery3Amt = parseFloat(document.getElementById("grocery3").value);
    let totalExpenditure = grocery1Amt + grocery2Amt + grocery3Amt;

    document.getElementById("totalExpenditure").innerText = `The tota amount is: ${totalExpenditure}`
}