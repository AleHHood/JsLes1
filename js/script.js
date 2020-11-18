" use strict";
 
let numberOfFilms;













const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count))
        {
            personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
        }
    },
    
    rememberMyFilms: function(){
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
    },

    detectPersonalLevel: function(){
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
    },

    showMyDB: function(){
        if(personalMovieDB.privat){
    
        }
        else{
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        }
        else{
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function(){
        for(let i = 1; i <= 3; ++i){
            personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
            if(personalMovieDB.genres[i-1] == null || personalMovieDB.genres[i-1].length == 0)
            {
                --i;
            }
        }
        personalMovieDB.genres.forEach((item, i) =>{
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
        
    }
};
personalMovieDB.writeYourGenres();

