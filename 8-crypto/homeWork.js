/*
Написать 2 функции:
шифратор пароля - функция принимает пароль, разбивает по символам, меняет местами 
какие-то буквы по заданному алгоритму и возвращает строку.
проверка пароля - принимает зашифрованный пароль и второй пароль. 
Воспроизводит алгоритм назад на зашифрованном пароле и возвращает true, 
если он совпадает со втором паролем и false, если нет.

crypto(‘password’) -> ssapdorw
check(‘ssapdorw’, ‘password’) -> true
check(‘ssapdorw’, ‘wrong’) -> false
*/
// Меняем местами элементы массива согласно ТЗ
// помощник: меняет местами элементы массива по индексам i и j
function swap(arr, i, j) {
  if (i < 0 || j < 0 || i >= arr.length || j >= arr.length) return;
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

// Шифратор
function crypto(password) {
  const chars = password.split(''); // разбили по символам

  // заданный порядок перестановок
  swap(chars, 0, 3);
  swap(chars, 1, 2);
  swap(chars, 4, 7);

  return chars.join('');
}

// Расшифровка (обратный алгоритм)
function decrypt(encrypted) {
  const chars = encrypted.split('');

  // обратный порядок перестановок
  swap(chars, 4, 7);
  swap(chars, 1, 2);
  swap(chars, 0, 3);

  return chars.join('');
}

// Проверка
function check(encryptedPassword, password) {
  return decrypt(encryptedPassword) === password;
}

// Тесты из задания
console.log(crypto('password'));             
console.log(check('ssapdorw', 'password'));   
console.log(check('ssapdorw', 'wrong'));      