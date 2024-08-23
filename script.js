function C2F(celsius) {
    return (celsius * 9/5) + 32;
}

function C2K(celsius) {
    return celsius + 273.15;
}

function F2C(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function F2K(fahrenheit) {
    return (fahrenheit - 32) * 5/9 + 273.15;
}

function K2C(kelvin) {
    return kelvin - 273.15;
}

function K2F(kelvin) {
    return (kelvin - 273.15) * 9/5 + 32;
}

function convert() {
    const value = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;
    let result1 = "";
    let result2 = "";

        if (unit === "C") {
            const fahrenheit = C2F(value);
            const kelvin = C2K(value);
            result1 = `In Kelvin : ${kelvin.toFixed(2)}K`;
            result2 = `In Fahrenheit : ${fahrenheit.toFixed(2)}°F`
        } else if (unit === "F") {
            const celsius = F2C(value);
            const kelvin = F2K(value);
            result1 = `In Celsius : ${celsius.toFixed(2)}°C`;
            result2 = `In Kelvin : ${kelvin.toFixed(2)}K`
        } else if (unit === "K") {
            const celsius = K2C(value);
            const fahrenheit = K2F(value);
            result1 = `In Celsius : ${celsius.toFixed(2)}°C`;
            result2 = `In Kelvin : ${kelvin.toFixed(2)}K`
        }

    document.getElementById("result1").innerText = result1;
    document.getElementById("result2").innerText = result2;
}
