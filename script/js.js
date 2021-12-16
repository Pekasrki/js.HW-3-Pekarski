
// 1 

// for(let i=1; i <= 50;i++){
//     document.write(i + '\n')
//     if(i == 50)document.write('<br\/>')
// };

// for(let i=38; i >= 8;i--) document.write(i + '\n');

// 2

// let a2 = 89;

// while(a2 >= 11){
//     document.write(a2 + '<br\/>')
//     a2--
// }


// 3
 
// let sum3 = 0;

// for(i = 0; i <= 100; i++){
//     sum3 += i;
// }
// document.write(sum3)


// 4

// let a4 = 5
// let sum = 0

// for(i = 1; i <= a4; i++){
//     for(g = 1; g <= i; g++)
//     sum += g; 
// }
// console.log(sum)



// 5 

// let a5 = 8;

// while(a5 <= 56){
//     if(a5 % 2 == 0)
//     document.write(a5 + "\n" + "<br\/>")
//     a5++ 
// }


// for(a5 = 8; a5 <= 56; a5++){
//     if(a5 % 2 == 0)
//     document.write(a5 + '<br\/>')
// }


// 6

// for(a = 1; a <= 9; a++)
//     for(b = 1; b <= 9; b++)
// document.write(a,"*",b ,'=' ,a*b + '<br\/>')// добавить разделения между группами



// 7 

// let n = 1000;
// let num = 0;

// while (n > 50){
//     n = n/2
//     num = num + 1

// }
// document.write(n + '<br\/>')
// document.write(num)

// let num = 0;

// for(n = 1000; n >= 50;){
//    num = num + 1
//    r = n
//    n = n/2
//    document.write(r + '<br\/>')
// }
// document.write(n + '<br\/>')
// document.write(num + '<br\/>')





//8
// let a8 = prompt('ВВедите любое число');
// let q = 0;
// let w = 0;

// for(; a8 > 0 || a8 == null;){

//     q = a8


//     if(a8 = prompt('ВВедите любое число') );
    
//     w = q += a8

//     // document.write(w);
// }

// document.write(w += a8 += q);




// 9 - 1

// let num = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';

// let cur='', min, max;
// for (let i = 0; i < num.length; i++) {
//   cur += num[i];
//   if (+num[i] && !+num[i+1]) {
//     if (typeof min !== 'number' || cur < +min) min = +cur;
//     if (typeof max !== 'number' || cur > +max) max = +cur;
//     cur = '';
//   }
// }
// document.write('Min:', min, ' Max: ', max)
















// 1
// let name = prompt('Как вас зовут?'),
//     age = prompt('Сколько вам лет?'),
//     city = prompt('В каком городе вы проживаете?'),
//     phone = prompt('Ваш номер телефона'),
//     email = prompt('Адрес вашей электронной почты'),
//     company = prompt('В какой организации вы работаете');

// document.write('Меня зовут ' + name,
//             ' мне ' + age + ' лет',
//             ' я проживаю в городе ' + city +
//             ' работаю в компании ' + company, 
//             ' Мои контактные данные ' + email+'\n' + phone  + "<br \/>");

// //2

// document.write(name, ' родился ', 2021-age, ' году'); // доделать с датами


// //3
// let a = 235652
// let b = 2+3+5
// let c = 6+5+2
// if(b==c){
//     console.log('Да')
// } else {
//     console.log('Нет') //надо добавить автодобор цифр
// }


// 4

// let p = 1;
// if(p > 0){
//     console.log('Верно')
// } else{
//     console.log('Не верно')
// }


// 5 

// let a5 = 10,
//     b5 = 2;
// document.write('Сумма =  ', a5+b5 + "<br \/>",'Разность = ', a5-b5 + "<br \/>",'Произведение = ', a5*b5 + "<br \/>",'Сумма =  ', a5/b5 + "<br \/>", 'Возведение суммы a и b в квадрат = ', (a5+b5)**2 + "<br \/>")


// 6-1 // if (a5 > 2, a5 < 11, b5 >= 6, b5 < 14) 

// if(a5 < 2) {
//     console.log('Неверно')
// } else if(a5 > 11) {
//     console.log('Неверно')
// } else {
//     console.log('Верно')
// }

// 6-2

// if(b5 <= 6 ) {
//     console.log('Неверно')
// } else if (b5 > 14) {
//     console.log('Неверно')
// } else {
//     console.log('Верно')
// }


// 6-3

// if(a5 < 2) {
//     console.log('Неверно')
// } else if(a5 > 11) {
//     console.log('Неверно')
// } else if(b5 <= 6) {
//     console.log('Неверно')
// } else if(b5 > 14) {
//     console.log('Неверно')
// } else {
//     console.log('Верно')
// }

// 7

// let n = prompt('Введите число от 1 до 59');

// if(n < 15) {
//     console.log('1 четверть')
// } else if (n >= 15 && n <30) {
//     console.log('2 четверть')
// } else if(n >= 30 && n < 45){
//     console.log('3 четверть')
// } else if(n >= 45 && n < 59){
//     console.log('4 четверть')
// } else {
//     console.log('Введены неверные данные')
// }


// 8 

// let day = prompt('Введите число от 1 до 31');

// if (day > 0 && day < 10) {
//     alert('1 декада')
// } else if(day >= 10 && day < 20){
//     alert('2 декада')
// } else if(day >= 20 && day <= 31){
//     alert('3 декада')
// } else {
//     alert('Введены неверные данные')
// }

// 8-2 нужно посмотреть и доделать

// switch (Math.round (day/10)) {
//     case 1:
//         alert('2 декада')
//     break;
//     case 2:
//         alert('3 декада')
//     break;
//     case 3:
//         alert('4 декада')
//     break;
//     default: alert('Введены неверные данные')
// }


// 9

// let day2 = prompt('Введите количество дней');
//     year = day2/365,
//     month = day2/31,
//     week = day2/7,
//     watch = day2*24,
//     minutes = day2*1440,
//     second = day2*86400;
  
//     document.write('Заданно дней ' + day2 + '<br\/>',)

//     if(year > 1){
//         document.write('Лет ' + year + '<br\/>')
//     } else if(year){
//         document.write('Меньше одного года' + '<br\/>')
//     };
    
//     if(month > 1){
//         document.write('Месяцев ' + month + '<br\/>')
//     } else if(month){
//         document.write('Меньше одного месяца' + '<br\/>')
//     };
    
//     if(week > 1){
//         document.write('Недель ' + week + '<br\/>')
//     } else if(week){
//         document.write('Меньше одной недели' + '<br\/>')
//     };

//     document.write( 'Часов ' + watch + '<br\/>', 'Минут ' +  minutes + '<br\/>', 'Секунд ' + second);



// 10 

// let day3 = prompt('Введите порядковый номер дня в году');



// if(day3 <= 30) {
//         alert('Январь')
//     } else if (day3 > 30 && day3 <= 60) {
//         alert('Февраль')
//     } else if(day3 > 60 && day3 <= 90){
//         alert('Март')
//     } else if(day3 > 90 && day3 <= 120){
//         alert('Артель')
//     } else if(day3 > 120 && day3 <= 150) {
//         alert('Май')
//     } else if (day3 > 150 && day3 <= 180) {
//         alert('Июнь')
//     } else if(day3 > 180 && day3 <= 210){
//         alert('Июль')
//     } else if(day3 > 210 && day3 <= 240){
//         alert('Аргуст')
//     } if(day3 > 240 && day3 <= 270) {
//         alert('Сентябрь')
//     } else if (day3 > 270 && day3 <= 300) {
//         alert('Октябрь')
//     } else if(day3 > 300 && day3 <= 330){
//         alert('Ноябрьрт')
//     } else if(day3 > 330 && day3 <= 360){
//         alert('Декабрь')
//     } else (day3 > 361)
       

//     switch (Math.round (day3/120)){
//         case 0:
//             alert ("Зима")
//             break;
//         case 1:
//             alert ("Весна")
//             break;
//         case 2:
//             alert ("Лето")
//             break;
//         case 3:
//             alert ("Осень")
//             break;
//         case 4:
//             alert ("Осень")
//             break}



   