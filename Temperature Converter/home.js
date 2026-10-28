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
        typeError.textContent = "Please select a unit";
        isValid = false;
    } else {
        typeError.textContent = "";
    }

    if (!isValid) {
        resultBox.textContent = "";
        return;
    }

    const temp = parseFloat(tempInput.value);
    const unit = conversionType.value;

    // Convert input to Celsius first
    let celsius;
    if (unit === "c") {
        celsius = temp;
    } else if (unit === "f") {
        celsius = (temp - 32) * 5 / 9;
    } else {
        celsius = temp - 273.15;
    }

    // Absolute zero check (-273.15°C = -459.67°F = 0 K)
    if (celsius < -273.15) {
        tempError.textContent = "Below absolute zero (-273.15°C / -459.67°F / 0 K) is not possible";
        resultBox.textContent = "";
        return;
    }

    const fahrenheit = celsius * 9 / 5 + 32;
    const kelvin = celsius + 273.15;

    resultBox.textContent =
        `${celsius.toFixed(2)} °C\n` +
        `${fahrenheit.toFixed(2)} °F\n` +
        `${kelvin.toFixed(2)} K`;
});
