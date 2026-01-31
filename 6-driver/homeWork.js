const hasLicence = true;
const age = 20;
const isDrink = false;

const isCanDrive = (hasLicence && age >= 18 && !isDrink) ? 'Может' : 'Не может';
console.log(isCanDrive);
