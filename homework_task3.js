let i = prompt('passvord');
let message;
const ADMIN_PASSWORD = 'adminpass';
 if (i === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
    
 }else if (i === null) {
    message = 'Отменено пользователем!';
    
 }else{
    message = ("Доступ запрещен, неверный пароль!");
    
 }alert(message);