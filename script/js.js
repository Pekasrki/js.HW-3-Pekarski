
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





//8 не получилось


// let a8 = prompt('ВВедите любое число');
// let q = 0;
// let w = 0;

// for(; a8 > 0 || a8 == null;){

//     q = a8


//     if(a8 = prompt('ВВедите любое число') );
    
//     w = q += a8

//     // document.write(w);
// }

// document.write();




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





let value;
    value = prompt('Введите любое число');
    value = Number(value);
    while ( (value !== 0) && !(isNaN(value)) ) {
        string = string + ' + ' + String(value);
        if (!count) string = string.substr(3, 3);
        sum = sum + value;
        count++
        average = sum / count;
        value = prompt('Введите любое число');
        value = Number(value);
    }
    if (value === 0) {
        alert('Ну, если Вы больше ничего не хотите, то тогда подведём итоги: \n\n'
            + 'Сумма введённых чисел ' + string + ' = ' + sum
            + '\nСреднее арифметическое введённых чисел = ' + (sum / count).toFixed(2));
    }else if (isNaN(value)){
        alert('Можно вводить только числа! Всего Вам доброго!');
    }

   