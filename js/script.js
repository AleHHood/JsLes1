" use strict";
 
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms))
    {
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}

function rememberMyFilms(){
    let i = 0;

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
}


function detectPersonalLevel(){
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
}

function showMyDB(){
    if(personalMovieDB.privat){

    }
    else{
        console.log(personalMovieDB);
    }
}

function writeYourGenres(){
    for(let i = 1; i <= 3; ++i){
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
    }

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

rememberMyFilms();
detectPersonalLevel();
writeYourGenres();
showMyDB();
