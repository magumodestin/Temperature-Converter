const tempInput = document.getElementById('tempInput');
const conversionType = document.getElementById('conversionType');
const convertBtn = document.getElementById('convertBtn');
const resultBox = document.getElementById('resultBox');
const tempError = document.getElementById('tempError');
const typeError = document.getElementById('typeError');

convertBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let isValid = true;

    // Validate number
    if (tempInput.value.trim() === "") {
        tempError.textContent = "Please enter a temperature";
        isValid = false;
    } else if (isNaN(tempInput.value)) {
        tempError.textContent = "Must be a valid number";
        isValid = false;
    } else {
        tempError.textContent = "";
    }

    // Validate select
    if (conversionType.value === "") {
        typeError.textContent = "Please select conversion type";
        isValid = false;
    } else {
        typeError.textContent = "";
    }

    if (!isValid) {
        resultBox.textContent = "";
        return;
    }

    // Convert
    const temp = parseFloat(tempInput.value);
    let result;

    if (conversionType.value === "c-to-f") {
        result = (temp * 9/5) + 32;
        resultBox.textContent = `${temp}°C = ${result.toFixed(1)}°F`;
    } else {
        result = (temp - 32) * 5/9;
        resultBox.textContent = `${temp}°F = ${result.toFixed(1)}°C`;
    }
});