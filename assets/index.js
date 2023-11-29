function countDown() {
    const calendar = document.getElementById('calendar');
    const paragraph = document.getElementById('paragraph');
    const result = document.getElementById('result');
    const birthdayImage = document.getElementById('birthdayImage');
            
    const birthday = calendar.value;

if (isNaN(Date.parse(birthday))) {
    paragraph.innerText = 'Пожалуйста, введите корректную дату дня рождения';
} else {
    paragraph.innerText = ''; 

    function countDownDays(birthDate) {
        const currentDay = new Date();
        const birthdayDate = new Date(birthDate);
        const diffInMilliseconds = birthdayDate - currentDay;
        const remainingDays = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));
        return remainingDays;
    }

    let remainingDays = countDownDays(birthday);
    let daysText;

    if (remainingDays === 0) {
        daysText = 'День рождения сегодня!';
    birthdayCard.style.display = 'block';
    } else {
        switch (remainingDays % 10) {
        case 1:
            daysText = `До дня рождения остался ${remainingDays} день`;
                break;
            case 2:
            case 3:
            case 4:
                daysText = `До дня рождения осталось ${remainingDays} дня`;
                break;
            default:
                daysText = `До дня рождения осталось ${remainingDays} дней`;
                break;
        }
    }

    result.innerText = daysText;
    }
}
