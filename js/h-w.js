

function first() {
    setTimeout(function(){
        console.log(1)
    }, 1000)
}

function second() {
    console.log(2)
}

first()
second()

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`)
    callback()
}

function done() {
    console.log('Я прошел этот курс!')
}

learnJS('JavaScript', done)