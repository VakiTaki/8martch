export const getRussianTimesWords = (value, unit) => {
   const units = {
      days: ['день', 'дня', 'дней'],
      hours: ['час', 'часа', 'часов'],
      minutes: ['минута', 'минуты', 'минут'],
      seconds: ['секунда', 'секунды', 'секунд'],
   };

   const getRussianForm = (number) => {
      if (number % 10 === 1 && number % 100 !== 11) {
         return 0; // для 1, 21, 31 и т.д.
      } else if ([2, 3, 4].includes(number % 10) && ![12, 13, 14].includes(number % 100)) {
         return 1; // для 2-4, 22-24, 32-34 и т.д.
      } else {
         return 2; // все остальные случаи
      }
   };

   const formIndex = getRussianForm(value);
   return `${units[unit][formIndex]}`;
};