// Show the selected converter section based on the selected type
document.getElementById("converter-type").addEventListener("change", function() {
    const converterType = this.value;
    const sections = document.querySelectorAll(".section");
    
    // Hide all sections
    sections.forEach(section => section.style.display = "none");
    
    // Show the corresponding section for the selected converter type
    document.getElementById(`${converterType}-units`).style.display = "block";
});

// Handle the conversion logic when the Convert button is clicked
document.getElementById("convert-btn").addEventListener("click", function() {
    const converterType = document.getElementById("converter-type").value;
    const value = parseFloat(document.getElementById("value-input").value);
    
    // Check if the input value is valid
    if (isNaN(value)) {
        alert("Please enter a valid number!");
        return;
    }
    
    let result;
    
    // Perform conversion based on the selected converter type
    switch (converterType) {
        case "length":
            result = convertLength(value);
            break;
        case "mass":
            result = convertMass(value);
            break;
        case "temperature":
            result = convertTemperature(value);
            break;
        case "energy":
            result = convertEnergy(value);
            break;
        default:
            result = "Invalid conversion type!";
    }
    
    // Display the converted value
    document.getElementById("converted-value").textContent = `Converted Value: ${result}`;
});

// Length Conversion Function
function convertLength(value) {
    const fromUnit = document.getElementById("unit-from-length").value;
    const toUnit = document.getElementById("unit-to-length").value;

    const lengthConversions = {
        "pm": 1e-12,
        "nm": 1e-9,
        "µm": 1e-6,
        "mm": 1e-3,
        "cm": 1e-2,
        "dm": 1e-1,
        "m": 1,
        "km": 1e3,
        "Mm": 1e6,
        "Gm": 1e9,
        "Tm": 1e12
    };

    const fromValue = lengthConversions[fromUnit];
    const toValue = lengthConversions[toUnit];

    // Perform the length conversion
    const convertedValue = (value * fromValue) / toValue;
    return `${convertedValue} ${toUnit}`;
}

// Mass Conversion Function
function convertMass(value) {
    const fromUnit = document.getElementById("unit-from-mass").value;
    const toUnit = document.getElementById("unit-to-mass").value;

    const massConversions = {
        "ng": 1e-9,
        "µg": 1e-6,
        "mg": 1e-3,
        "g": 1,
        "kg": 1e3,
        "t": 1e6,
        "ton": 1e6
    };

    const fromValue = massConversions[fromUnit];
    const toValue = massConversions[toUnit];

    // Perform the mass conversion
    const convertedValue = (value * fromValue) / toValue;
    return `${convertedValue} ${toUnit}`;
}

// Temperature Conversion Function
function convertTemperature(value) {
    const fromUnit = document.getElementById("unit-from-temperature").value;
    const toUnit = document.getElementById("unit-to-temperature").value;

    let convertedValue;
    if (fromUnit === "C" && toUnit === "F") {
        convertedValue = (value * 9/5) + 32;
    } else if (fromUnit === "C" && toUnit === "K") {
        convertedValue = value + 273.15;
    } else if (fromUnit === "F" && toUnit === "C") {
        convertedValue = (value - 32) * 5/9;
    } else if (fromUnit === "F" && toUnit === "K") {
        convertedValue = ((value - 32) * 5/9) + 273.15;
    } else if (fromUnit === "K" && toUnit === "C") {
        convertedValue = value - 273.15;
    } else if (fromUnit === "K" && toUnit === "F") {
        convertedValue = ((value - 273.15) * 9/5) + 32;
    } else {
        convertedValue = value; // If same units, no conversion needed
    }

    return `${convertedValue} ${toUnit}`;
}

// Energy Conversion Function
function convertEnergy(value) {
    const fromUnit = document.getElementById("unit-from-energy").value;
    const toUnit = document.getElementById("unit-to-energy").value;

    const energyConversions = {
        "J": 1,
        "cal": 4.184
    };

    const fromValue = energyConversions[fromUnit];
    const toValue = energyConversions[toUnit];

    // Perform the energy conversion
    const convertedValue = (value * fromValue) / toValue;
    return `${convertedValue} ${toUnit}`;
}
