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

function crypto (password){
    const middleString = Math.ceil(password.length / 2); // Середина строки
    const startString = password.slice(0, middleString); // Обрезаем начало строки
    const endString = password.slice(middleString);// Обрезаем конец строки
    const reverseStart = startString.split('').reverse().join('');
    const reverseEnd = endString.split('').reverse().join(''); // Разбиваем на символы, переворачиваем склеиваем

    return reverseStart + reverseEnd;
}

function check(encryptedPassword, password){
    const decrypted = crypto(encryptedPassword);
    return decrypted === password;
}
console.log(crypto('Anton')) 
console.log(check('tnAno', 'Bird'))