function isLoginValid (login, min = 4, max = 16) {
  // Write code under this line
   const LoginValid = login.length >=4 && login.length <=16 
  return LoginValid
}

function isLoginUnique  (allLogins, login) {
  'use strict';
  // Write code under this line
    const LoginUnique =allLogins.includes(login);
 if (LoginUnique===true){
  return false
 }
  return true
}

function addLogin (allLogins, login) {
  'use strict';
  const SUCCESS = 'Логин успешно добавлен!';
  const REFUSAL = 'Такой логин уже используется!';
  const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
  let message;
  // Write code under this line    
    if ( isLoginValid(login)===false){
    return ERROR
  } 
else if ( isLoginUnique ( allLogins, login)===false) {
	return REFUSAL
 }	
 	else allLogins.push(login)

	return SUCCESS
}
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

 console.log(addLogin(logins, 'Ajax')); 
 'Логин успешно добавлен!'

 console.log(addLogin(logins, 'robotGoogles')); 
 'Такой логин уже используется!'

 console.log(addLogin(logins, 'Zod'));
 'Ошибка! Логин должен быть от 4 до 16 символов'

 console.log(addLogin(logins, 'jqueryisextremelyfast')); 
 'Ошибка! Логин должен быть от 4 до 16 символов' 