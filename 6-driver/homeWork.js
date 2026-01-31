const hasLicence = true;
const age = 20;
const isDrink = false;

const isCanDrive = hasLicence && age >= 18 && !isDrink;
console.log(isCanDrive);
