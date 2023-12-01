//Определение функции countDown для полсчета дней до дня рождения
function countDown() {
    //Получение элементов интерфейса
    const calendar = document.getElementById('calendar');//Поле для ввода даты
    const paragraph = document.getElementById('paragraph');//Параграф для сообщений пользователю
    const result = document.getElementById('result');//Параграф для вывода результата
    const birthdayImage = document.getElementById('birthdayImage');//Изображение для отображения в день рождения
            
    //Чтение даты из поля ввода
    const birthday = calendar.value;
//Проверка на валидность введенной даты
if (isNaN(Date.parse(birthday))) {
    paragraph.innerText = 'Пожалуйста, введите корректную дату дня рождения';
    return; //Выходиз функции, если дата некорректна
} 
//Очистка параграфа сообщений
    paragraph.innerText = ''; 

//Вычисление разницы между текущей датой и днем рождения 
        const currentDay = new Date();//Текущая дата
        const birthdayDate = new Date(birthDate);//Дата дня рождения
        const diffInMilliseconds = birthdayDate - currentDay;//Разница в миллисекундах
        const remainingDays = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));//Переход в дни

    
//Проверка не прошла или уже дата дня рождения
if (remainingDays <0) {
    result.innerText = 'Выбранная дата уже прошла';
    return;//Выход из функции, если дата уже прошла
}

//Формирование сообщения в зависимости оот количества оставшихся дней
    let daysText;

    if (remainingDays === 0) {
    //Если день рожения сегодня
        daysText = 'День рождения сегодня!';
        birthdayImage.style.display = 'block';//Показываем изображение
    } else {
        //Вычисление последней цифры оставшихся дней для правильного склонения слова "день"        
        let lastDigit = remainingDays % 10;
        let lastTwoDigits = remainingDays % 100;
        //Выбор правильной формы слова "день" в зависимости от числа
        if (lastDigit === 1 && lastTwoDigits !==11){
            daysText = `До дня рождения остался ${remainingDays} день`;
        } else if (
            lastDigit >= 2 &&
            lastDigit <= 4 &&
            (lastTwoDigits < 12 || lastTwoDigits > 14)
        ){
            daysText = `До дня рождения осталось ${remainingDays} дня`;
        } else {
            daysText = `До дня рождения осталось ${remainingDays} дней`;
            }
        }
//Вывод сообщения с количеством оставшихся дней
    result.innerText = daysText;
}