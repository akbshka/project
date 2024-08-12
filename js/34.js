



const personalMovieDB = {
    count : 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count ==='' || personalMovieDB.count === null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: () => {

        for ( let i = 0; i < 2; i++){
        
            const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
                  b = prompt('На сколько оцените его?', '');
        
                  if( a === null || b === null || a === '' || b === '' || a.length > 50){
                    i--;
                    console.log('Error')
                  }
                  console.log('Done')
                personalMovieDB.movies[a] = b;
        }
        },
        detectPersonalLevel: () => {

            if(personalMovieDB.count > 10 && personalMovieDB.count < 30){
                console.log('Вы классический зритель')
            }else if(personalMovieDB.count >= 30){
                console.log("Вы киноман")
            }else if(personalMovieDB.count < 10){
                console.log("Просмотрено довольно мало фильмов")
            }else{
                console.log("Произошла ошибка")
            }
        },
        showMyDB: (hidden) => {
            if (!hidden) {
                console.log(personalMovieDB)
            }
        },
        toggleVisibleMyDB: () => {
            if (personalMovieDB.privat) {
                personalMovieDB.privat = false
            }else{
                personalMovieDB.privat = true
            }
        },
        writeYourGenres: () => {
            for (let i = 1; i < 2; i++){
                let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
                if (genres === '' || genres === null) {
                    console.log('Вы ввели некоретные данные или не ввели вообще!')
                    i--
                } else {
                    personalMovieDB.genres = genres.split(', ');
                    personalMovieDB.genres.sort()
                }                
            }
            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Любимый жанр ${i + 1} - это ${item}`)
            })
        }
}


