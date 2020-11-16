" use strict";
 
const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let i = 0,
    c;

while (i<2){
    const
    a = prompt('Один из последних просмотренных фильмов?', '');
    if(a === null || 0 == a.length || a.length > 50){
         alert('Не корректный ответ');
         continue;
    }
    
    let
    b = prompt('На сколько оцените его?', '');
    while (b === null || 0 == b.length || b.length > 50){
        alert('Не корректный ответ');
        b = prompt('На сколько оцените его?', '');
        continue;
   }
    personalMovieDB.movies[a] = b;
    ++i;
}

if (personalMovieDB.count < 10){
    alert('Мало фильмов');
}
else{
    if(personalMovieDB.count < 30){
        alert('Много фильмов');
    }
    else{
        if(personalMovieDB.count > 30){
            alert('Вы киноман!');
        }
        else{
            alert('Ошибка');
        }
    }
}

console.log(personalMovieDB);