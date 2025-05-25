function scale() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('tall').value);
    
    if (!weight || !height || height <= 0) {
        window.alert("Please enter real weight and height.");
        return;
    }

    var bmi = weight / (height * height);

    if (bmi < 18.5) {
        window.alert("You are underweight!");
    } 
    else if (bmi >= 18.5 && bmi <= 24.9) {
        window.alert("You have normal weight.");
    } 
    else if (bmi >= 25 && bmi <= 29.9) {
        window.alert("You are overweight!");
    } 
    else if (bmi >= 30) {
        window.alert("You are obese.");
    } 
    else {
        window.alert("Invalid BMI result.");
    }
}
