document.addEventListener("DOMContentLoaded", function () {
    function calculateBMI() {
        let weight = parseFloat(document.getElementById("weight").value);
        let height = parseFloat(document.getElementById("height").value);
        let weightUnit = document.getElementById("weightUnit").value;
        let heightUnit = document.getElementById("heightUnit").value;
        let birthdayInput = document.getElementById("birthday").value;
        let resultElement = document.getElementById("result");

        // Convert weight units
        if (weightUnit === "lbs") {
            weight = weight * 0.453592; // Convert pounds to kg
        } else if (weightUnit === "gram") {
            weight = weight / 1000; // Convert grams to kg
        }

        // Convert height units
        if (heightUnit === "cm") {
            height = height / 100; // Convert cm to meters
        } else if (heightUnit === "in") {
            height = height * 0.0254; // Convert inches to meters
        } else if (heightUnit === "feet") {
            height = height * 0.3048; // Convert feet to meters
        }

        // Validate inputs
        if (weight > 0 && height > 0) {
            let bmi = weight / (height * height);
            let category = "";
            let categoryColor = "";

            if (bmi < 18.5) {
                category = "Underweight";
                categoryColor = "yellow";
            } else if (bmi < 24.9) {
                category = "Normal weight";
                categoryColor = "green";
            } else if (bmi < 29.9) {
                category = "Overweight";
                categoryColor = "lightcoral"; // Light red
            } else {
                category = "Obese";
                categoryColor = "red";
            }

            let ageText = calculateAge(birthdayInput);
            resultElement.innerHTML = `
                <br><span style="color: black;">BMI: ${bmi.toFixed(2)}</span> 
                <strong style="color: ${categoryColor};">${category}</strong><br><br>
                <span style="color: black;">${ageText}</span>
            `;
        } else {
            resultElement.innerHTML = "Please enter valid weight and height!";
            resultElement.style.color = "black";
        }
    }

    function calculateAge(birthdayInput) {
        if (!birthdayInput) return "Please enter your birthday!";

        let birthDate = new Date(birthdayInput);
        let today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        let monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return `Your age is: ${age} years`;
    }

    function resetFields() {
        document.getElementById("weight").value = "";
        document.getElementById("height").value = "";
        document.getElementById("weightUnit").value = "kg";
        document.getElementById("heightUnit").value = "m";
        document.getElementById("birthday").value = "";
        document.getElementById("result").innerHTML = "";
    }

    // Attach event listeners
    document.querySelector(".cal-btn").addEventListener("click", calculateBMI);
    document.querySelector(".reset-btn").addEventListener("click", resetFields);
    document.querySelector(".nav-btn").addEventListener("click", function () {
        window.open("https://x.com/banujalakmuthu", "_blank");
    });
    
});
