const userLang = "it";

switch (userLang) {
  case "ru":
    console.log("Добрый день");
    break;
  case "en":
    console.log("Good afternoon");
    break;
  case "de":
    console.log("Guten Tag");
    break;
  case "fr":
    console.log("Bonjour");
    break;
  case "it":
    console.log("Ciao");
    break;
  default:
    console.log("Выберите поддерживаемый язык");
}
