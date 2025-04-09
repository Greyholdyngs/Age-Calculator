function calculateAge() {
    let inputDay = document.getElementById('day');
    let inputMonth = document.getElementById('month');
    let inputYear = document.getElementById('year');

    let divError = document.getElementById('error-message')

    let spanYears = document.getElementById('years');
    let spanMonths = document.getElementById('months');
    let spanDays = document.getElementById('days');

    [inputDay, inputMonth, inputYear].forEach(input => input.classList.remove('error'));
    divError.innerText = '';

    let day = parseInt(inputDay.value);
    let month = parseInt(inputMonth.value) - 1;
    let year = parseInt(inputYear.value);

    let hasError = false;

    if (!day || day < 1 || day > 31) {
        inputDay.classList.add('error');
        hasError = true;
    }
    if (!inputMonth.value || month < 0 || month > 11) {
        inputMonth.classList.add('error');
        hasError = true;
    }
    let currentYear = new Date().getFullYear();
    if (!year || year < 1900 || year > 2100) {
        inputYear.classList.add('error');
        hasError = true;
    }
    if (hasError) {
        divError.innerText = "Please enter a valid date (DD-MM-YYYY).";
        spanYears.innerText = '--';
        spanMonths.innerText = '--';
        spanDays.innerText = '--';
        return;
    }
    let dob = new Date(year, month, day);
    let today = new Date();

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    spanYears.innerText = years;
    spanMonths.innerText = months;
    spanDays.innerText = days;
}