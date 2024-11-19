// testtt
document.getElementById('carbonForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const electricity = parseFloat(document.getElementById('electricity').value);
    const car = parseFloat(document.getElementById('car').value);
    const waste = parseFloat(document.getElementById('waste').value);
    const CO2_per_kWh = 0.92;
    const CO2_per_km_car = 0.22;
    const CO2_per_kg_waste = 0.9;
    const electricityCO2 = electricity * CO2_per_kWh;
    const carCO2 = car * CO2_per_km_car;
    const wasteCO2 = waste * CO2_per_kg_waste;
    const totalCO2 = electricityCO2 + carCO2 + wasteCO2;
    document.getElementById('result').style.display = 'block';
    document.getElementById('carbonOutput').textContent = `Total Jejak Karbon Anda: ${totalCO2.toFixed(2)} Kg CO2 per hari.`;
});
