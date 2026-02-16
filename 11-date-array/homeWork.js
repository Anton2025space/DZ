const arr = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];

function filterValidDates(arr) {
  return arr
    .map(str => {
      // Проверка формата
      const match = str.match(/^(\d{2})[-\/](\d{2})[-\/](\d{4})$/);
      if (!match) return null;

      let [, day, month, year] = match;

      day = Number(day);
      month = Number(month);
      year = Number(year);

      // Базовая проверка диапазонов
      if (day < 1 || month < 1 || month > 12) return null;

      const date = new Date(year, month - 1, day);

      // Проверка что дата не "исправилась"
      if (
        date.getFullYear() !== year ||
        date.getMonth() !== month - 1 ||
        date.getDate() !== day
      ) {
        return null;
      }

      // Возвращаем в формате DD-MM-YYYY
      return `${String(day).padStart(2, '0')}-${String(month).padStart(2, '0')}-${year}`;
    })
    .filter(Boolean);
}
console.log(filterValidDates(arr));