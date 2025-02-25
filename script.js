function calculateCharges() {
    let prevReading = parseFloat(document.getElementById("prevReading").value);
    let presentReading = parseFloat(document.getElementById("presentReading").value);

    if (isNaN(prevReading) || isNaN(presentReading) || prevReading >= presentReading) {
        document.getElementById("result").innerHTML = "Please enter valid readings.";
        return;
    }

    let consumption = presentReading - prevReading;
    let waterCharges = 0;

    if (consumption <= 10000) {
        waterCharges = consumption * 50 / 1000;
    } else if (consumption <= 25000) {
        waterCharges = (10000 * 50 + (consumption - 10000) * 57) / 1000;
    } else if (consumption <= 50000) {
        waterCharges = (10000 * 50 + 15000 * 57 + (consumption - 25000) * 65) / 1000;
    } else if (consumption <= 75000) {
        waterCharges = (10000 * 50 + 15000 * 57 + 25000 * 65 + (consumption - 50000) * 76) / 1000;
    } else {
        waterCharges = (10000 * 50 + 15000 * 57 + 25000 * 65 + 25000 * 76 + (consumption - 75000) * 87) / 1000;
    }

    let sanitaryCharges = waterCharges * 0.25;
    let totalCharges = waterCharges + sanitaryCharges;

    document.getElementById("result").innerHTML = `
        Water Fare: Rs. ${waterCharges.toFixed(2)}<br>
        Sanitary Fare (25%): Rs. ${sanitaryCharges.toFixed(2)}<br>
        <strong>Total Payable: Rs. ${totalCharges.toFixed(2)}</strong>
    `;
}
