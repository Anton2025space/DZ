const enterCard = "4561-2612-1234-5464";

function algorithmLuna(enterCard) {
  // Убрать пробелы и преобразовать в строку
  let convertAndCleanCard = enterCard.toString().replace(/\s/g, "");
  // Проверяем на корректность ввода (только цифры)
  if (!/^\d+$/.test(convertAndCleanCard)) return false;
  // Объявляем накопитель суммы
  let sum = 0;
  // Делаем переменную для пропуска нечетных чисел
  let isShouldDouble = false;
  // Делаем итерацию справа налево
  for (let i = convertAndCleanCard.length - 1; i >= 0; i++) {
    // Парсим строку по символам
    let digit = parseInt(convertAndCleanCard.charAt(i));
    // Делаем условия для удвоения или вычитания
    if (isShouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    isShouldDouble = !isShouldDouble;
  }
  return sum % 10 === 0;
}

console.log(algorithmLuna(enterCard));
