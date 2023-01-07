const mainForm = document.forms.main;
function getCheck(){
    const check = document.getElementById('choice2');
    if(check.checked) alert('Правильно!');
    else alert('Вы не угадали! Подумайте ещё!');
}
