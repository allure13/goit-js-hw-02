// function formatMessage(message, maxLength) {
//   if (message.length <= maxLength) {
//     return message;
//   } else {
//     return message.substring(0, maxLength) + "...";
//   }
// }

// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

// Написати функцію getCountryInfo(country), котра буде
// отримувати назву країни і виводити інформацію про неї
// China => "Китай - найбільша країна за населенням у світі."
// Australia => "Австралія - найбільший острів та країна в Океанії."
// France => "Франція відома своєю гастрономією та мистецтвом."
// Germany => "Німеччина - найбільша економіка в Європі."
// Canada => "Канада - друга за площею країна у світі, відома своєю природою."
// Якщо країни немає, вивести повідомлення "Інформація про цю країну відсутня."

function getCountryInfo(country) {
  let info;
  switch (country) {
    case "China":
      info = "Китай - найбільша країна за населенням у світі.";
      break;
    case "Australia":
      info = "Австралія - найбільший острів та країна в Океанії.";
      break;
    case "France":
      info = "Франція відома своєю гастрономією та мистецтвом.";
      break;
    case "Germany":
      info = "Німеччина - найбільша економіка в Європі.";
      break;
    case "Canada":
      info = "Канада - друга за площею країна у світі, відома своєю природою.";
      break;
    default:
      info = "Інформація про цю країну відсутня.";
      break;
  }
  return info;
}
console.log(getCountryInfo("Ukraine"));
