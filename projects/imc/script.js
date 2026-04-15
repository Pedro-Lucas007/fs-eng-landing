const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    console.log('submit disparou');
    event.preventDefault();

    const weight = Number(document.getElementById('weight').value);
    const height = Number(document.getElementById('height').value);

    if (!weight || !height) {
        return;
    }

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    const value = document.getElementById('value');
    const description = document.getElementById('description');
    const infos = document.getElementById('infos');

    value.classList.remove('normal');
    value.classList.add('attention');

    infos.classList.remove('hidden');

    let message = '';

    if (bmi < 18.5) {
        message = 'Cuidado! Você está abaixo do peso.';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        message = 'Parabéns! Você está no peso ideal.';
        value.classList.remove('attention');
        value.classList.add('normal');
    } else if (bmi >= 25 && bmi <= 29.9) {
        message = 'Cuidado! Você está com sobrepeso.';
    } else if (bmi >= 30 && bmi <= 34.9) {
        message = 'Cuidado! Você está com obesidade moderada.';
    } else if (bmi >= 35 && bmi <= 39.9) {
        message = 'Cuidado! Você está com obesidade severa.';
    } else {
        message = 'Cuidado! Você está com obesidade mórbida.';
    }

    value.textContent = bmi.replace('.', ',');
    description.textContent = message;
});

document.getElementById('weight').focus();

const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');

weightInput.addEventListener('focus', () => {
  weightInput.select();
});

heightInput.addEventListener('focus', () => {
  heightInput.select();
});