# Temperature Converter

A simple, responsive web app that converts temperatures between Celsius (°C), Fahrenheit (°F) and Kelvin (K).

> **Updated (October 2026):** Kelvin support was added in this version. The first version only converted between Celsius and Fahrenheit. See [What's New](#whats-new).

## What's New

- **Kelvin (K) added.** You can now choose Celsius, Fahrenheit or Kelvin as the starting unit.
- **All units at once.** One click on Convert now shows the result in °C, °F and K together.
- **Absolute zero check.** Values below −273.15°C, −459.67°F or 0 K show a clear error, because nothing can be colder than absolute zero.
- **Unit selector changed.** The old "Celsius to Fahrenheit / Fahrenheit to Celsius" dropdown is now a "Convert From" dropdown.
- **Decimal input.** Values such as 36.6 are accepted.

## Features

- Convert between Celsius, Fahrenheit and Kelvin
- All three results shown together after one click
- Input validation with inline error messages (empty, non-numeric and below absolute zero)
- Clean, minimal UI with a full-screen animated video background
- Fully responsive design

## Built With

- HTML5
- CSS3
- JavaScript (Vanilla)

## Usage

1. Enter a temperature value in the input field.
2. Select the unit you are converting from (°C, °F or K).
3. Click **Convert** to see the result in all three units.

## Formulas

| Conversion | Formula |
|---|---|
| °C to K | K = °C + 273.15 |
| °C to °F | °F = (°C × 9/5) + 32 |
| °F to °C | °C = (°F − 32) × 5/9 |
| K to °C | °C = K − 273.15 |

The script first converts the input to Celsius, then converts from Celsius to the other two units.

## Project Structure

```
index.html
style.css
script.js
fallback.jpg
vid/coverfire.mp4
```

## Version History

| Version | Changes |
|---|---|
| 1.0 | Celsius ↔ Fahrenheit conversion, input validation, video background |
| 2.0 | Added Kelvin, all-units result display, absolute zero validation |
