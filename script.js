/*1. Написать функцию, которая принимает 2 числа и возвращает -1,
если первое меньше, чем второе; 1 – если первое больше,
чем второе; и 0 – если числа равны.

function number() {
    let twoNumbers = +prompt('Enter two numbers','');
    let first = String(twoNumbers).substr(0, 1);
    let second = String(twoNumbers).substr(1);
 document.write(`You enter : ${twoNumbers}<br>`);
    if (first<second){
        document.write(`-1`);
    }else if(first>second){
        document.write(`1`);
    }else{
        document.write(`0`);
    }
}
number();*/

/*2. Написать функцию, которая вычисляет факториал переданного ей числа.

function factorial() {
    let number = +prompt("Enter number");
    let first = String(number).substr(0, 1);
    let result = 1;

    while(first){
        result *= first--;
    }
document.write(result);
}
factorial();*/

/*3. Написать функцию, которая принимает три отдельные цифры и
превращает их в одно число. Например: цифры 1, 4, 9 превратятся в
число 149.

function oneNumber() {
    let number=[];
      for(let i=0; i<3; i++){
       number[i] = prompt('Enter number','');
    }
      let result = number.join("");
    document.write(`Answer: ${result}`);
}
oneNumber();*/

/*4. Написать функцию, которая принимает длину и ширину
прямоугольника и вычисляет его площадь. Если в функцию передали
 1 параметр, то она вычисляет площадь квадрата.

function square() {
    let a = +prompt('Enter width','');
    let b = +prompt('Enter height','');
    let calc;
        if (a==0){
        calc=b*2;
        document.write(`You enter only height, so square area is:${calc}`);
    }else if (b==0){
        calc = a*2;
        document.write(`You enter only height, so square area is:${calc}`);
    }else {
            calc = a*b;
            document.write(`Rectangle area is: ${calc}`);
        }
}
square();*/

/*5. Написать функцию, которая проверяет, является ли переданное ей
число совершенным. Совершенное число – это число, равное сумме всех
своих собственных делителей.


function superNumber() {
    let number = +prompt('Enter number','');
    let result = null;

    for (let i = 1; i <= number / 2; i +=1) {
        if (number % i === 0)
            result += i;
    }

    if (result == number){
        document.write(`${number} Super Number!`);
    }else {
        document.write(`${number} is not super(`);
    }

}
superNumber();*/

/*6. Написать функцию, которая принимает минимальное и максимальное
значения для диапазона, и выводит только те числа из диапазона,
которые являются совершенными. Используйте написанную ранее функцию,
 чтобы узнавать, совершенное число или нет.

function range() {
    let from = +prompt('Enter number from','');
    let to = +prompt('Enter number to','');
let start = from+1;
    for(;start<to;start++){

        let result = null;
        for (let i = 1; i <= start / 2; i +=1) {
            if (start % i === 0)
                result += i;
        }
        if (result == start){
            document.write(start+' '+' is super number<br>');
        }
    }

    }
range();*/
/*7. Написать функцию, которая принимает время (часы, минуты, секунды)
 и выводит его на экран в формате «чч:мм:сс».Если при вызове функции
 минуты и/или секунды не были переданы, то выводить их как 00.

function time() {
    let hours = +prompt('Enter hours','');
    let min = +prompt('Enter minutes','');
    let sec = +prompt('Enter seconds','');


    if(hours==0 && min==0 && sec==0){
        hours="0"+"0";
        min="0"+"0";
        sec="0"+"0";
    }else if(hours==0 && min==0){
        hours="0"+"0";
        min="0"+"0";
    }else if(min==0 && sec==0){
        min="0"+"0";
        sec="0"+"0";
    }else if(hours==0 && sec==0){
        hours="0"+"0";
        sec="0"+"0";
    }else if(hours==0){
        hours="0"+"0";
    }else if(min == 0){
        min="0"+"0";
    }else if(sec==0){
        sec="0"+"0";
    }
    document.write(`${hours}:${min}:${sec}`);
}

time();*/

/*8.Написать функцию, которая принимает часы, минуты и секунды
 и возвращает это время в секундах.

function time() {
    let hours;
    let min;
    let sec;
   do{
       hours = +prompt('Enter hours from 1 to 24','');

   }while (hours<1 || hours>24);

   do{
     min  = +prompt('Enter minutes from 1 to 60','');
   }while (min<1 || min >60);

   do{
     sec  = +prompt('Enter seconds from 1 to 60','');
   }while (sec<1 || sec>60);

    let hour = hours*3600;
    let minutes = min*60;

    document.write(`You enter ${hours}:${min}:${sec}<br> It's in seconds: ${hour+minutes+sec}`);

}

time();*/


/*9. Написать функцию, которая принимает количество секунд,
переводит их в часы, минуты и секунды и возвращает в виде
строки «чч:мм:сс».

function time() {
   let seconds = +prompt('Enter seconds from 1 to 90060');
   let secTohour = seconds/3600;
    let h = secTohour.toFixed(0);
    let calcMin = seconds%3600;
    let minutes = calcMin/60;
    let min = String(minutes).substr(0,2)
    let sec = calcMin%60;

    if(min<10){
        let m = String(minutes).substr(0,1)
        document.write(`${h}:0${m}:${sec}`);
    }else {
        document.write(`${h}:${min}:${sec}`);
    }
}

time();*/

/*10.Написать функцию, которая считает разницу между датами. Функция
принимает 6 параметров, которые описывают 2 даты, и возвращает результат
 в виде строки «чч:мм:сс». При выполнении задания используйте функции
 из предыдущих 2-х заданий: сначала обе даты переведите в секунды,
 узнайте разницу в секундах, а потом разницу переведите обратно в
  «чч:мм:сс»
function timeBetween() {
    let hourFrom;
    let minutesFrom;
    let secondsFrom;
    let totalShank;
    let hourTo;
    let minutesTo;
    let secondsTo;
    let totalSecondsFrom;
    let totalSecondsTo;


        do{
            hourFrom = +prompt('Enter hours to count FROM (data:1 - 24)','');
            hourTo = +prompt('Enter hours to count TO (data:1 - 24)','');

        }while (hourFrom<1 || hourFrom>24 || hourTo<1 || hourTo>24);

        do{
            minutesFrom  = +prompt('Enter minutes to count FROM (1 - 60)','');
            minutesTo  = +prompt('Enter minutes to count TO (1 - 60)','');
        }while (minutesFrom<1 || minutesFrom >60 || minutesTo<1 || minutesTo>60);

        do{
            secondsFrom  = +prompt('Enter seconds to count TO (1 - 60)','');
            secondsTo  = +prompt('Enter seconds to count TO (1 - 60)','');
        }while (secondsFrom<1 || secondsFrom>60);

        let hourF = hourFrom*3600;
        let hourT = hourTo*3600;
        let minutesF = minutesFrom*60;
        let minutesT = minutesTo*60;

        totalSecondsFrom = hourF+minutesF+secondsFrom;
        totalSecondsTo= hourT+minutesT+secondsTo;
        totalShank = totalSecondsTo-totalSecondsFrom;


        let sec = totalShank;
        let secTohour = sec/3600;
        let h = secTohour.toFixed(0);
        let calcMin = sec%3600;
        let minutes = calcMin/60;
        let min = String(minutes).substr(0,2)
        let secF = calcMin%60;

        if(min<10){
            let m = String(minutes).substr(0,1)
            document.write(`${h}:0${m}:${secF}`);
        }else {
            document.write(`${h}:${min}:${secF}`);
        }

}

timeBetween();*/






