// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     geners: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 10) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// while (personalMovieDB.count < 10) {
//     console.log('Мало фильмов');
//     break;
// }
// while (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Норма');
//     break;
// }
// while (personalMovieDB.count >= 30) {
//     console.log('Много фильмов');
//     break;
// }

// if (personalMovieDB.count < 10) {
//     console.log('Мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Норма');
// } else if (personalMovieDB.count >= 30) {
//     console.log('Много фильмов');
// } else {
//     console.log('Ошибка');
// }

// console.log(personalMovieDB);

// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++
// }


// let num = 50;

// do {
//     console.log(num);
//     num++
// } while (num < 55);

// let num = 50;

// for (let i = 1; i < 5; i++) {
//     console.log (num);
//     num++;
// }

// let message = function() {
//     alert('Hello World');
// };

// message();

// let result = sum(a, b) => {return a + b};
// let sum(1, 2);
// console.log(result);

// function showCount(count) {
//     // если count равен undefined или null, показать "неизвестно"
//     alert(count ?? "неизвестно");
//   }
//   showCount(0); // 0
//   showCount(null); // неизвестно
//   showCount(15); // неизвестно

// function checkAge(a, b) {
//     if (a < b) {
//       return console.log(a);
//     } else {
//       return console.log(b);
//     }
//   };

  

// let checkAge = (a, b) => console.log(a+b);

// checkAge(10, 5);

// let sayHello = (a, b) => alert(a + b);

// sayHello('Hello', ' World!');


// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );

