function openModal() {
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

document.getElementById('carbonForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const electricityWatt = parseFloat(document.getElementById('electricityWatt').value);
    const lamaPakai = parseFloat(document.getElementById('lamaPakai').value);
    const car = parseFloat(document.getElementById('car').value);
    const sampah = parseFloat(document.getElementById('sampah').value);

    if (isNaN(electricityWatt) || isNaN(lamaPakai) || isNaN(car) || isNaN(sampah)) {
        alert("Harap masukkan angka yang valid!");
        return;
    }

    const electricity = (electricityWatt / 1000) * lamaPakai;
    
    const CO2_per_kWh = 0.62;
    const CO2_per_km_car = 0.088;
    const CO2_per_kg_sampah = 0.8;

    const electricityCO2 = electricity * CO2_per_kWh;
    const carCO2 = car * CO2_per_km_car;
    const sampahCO2 = sampah * CO2_per_kg_sampah;

    const totalCO2 = electricityCO2 + carCO2 + sampahCO2;

    document.getElementById('result').style.display = 'block';
    document.getElementById('carbonOutput').textContent = `Total Jejak Karbon Anda: ${totalCO2.toFixed(2)} Kg CO2 per hari`;

    let warningMessage = '';
    let warningClass = '';

    if (totalCO2 < 7) {
        warningMessage = 'Jejak karbon Anda dalam skala rendah! Anda sudah cukup ramah lingkungan';
        warningClass = 'green';
    } else if (totalCO2 >= 7 && totalCO2 < 20) {
        warningMessage = 'Jejak karbon Anda cukup tinggi. Cobalah untuk mengurangi emisi karbon!';
        warningClass = 'yellow';
    } else {
        warningMessage = 'Jejak karbon Anda sangat tinggi! Perlu tindakan segera untuk mengurangi dampaknya!';
        warningClass = 'red';
    }

    const warningElement = document.getElementById('carbonWarning');
    warningElement.textContent = warningMessage;
    warningElement.className = 'warning ' + warningClass;

    closeModal();
});
