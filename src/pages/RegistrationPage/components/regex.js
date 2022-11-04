export const validUsername = new RegExp('^([а-яА-Я]{2,})$|^([a-zA-Z]{2,})$|^([a-zA-Z]{2,}\\s[a-zA-Z]+\'?-?[a-zA-Z]+\\s?[a-zA-Z]+)$|^([а-яА-Я]{2,}\\s[а-яА-Я]+\'?-?[а-яА-Я]+\\s?[а-яА-Я]+)$');
export const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
//export const validPassword = new RegExp('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$');
export const validPassword = new RegExp('^[A-Za-z0-9]{6,}$');
export const validPhoneNumber = new RegExp('^\\+?(38)?(\\d{10,11})$');