const fs = require('fs')

settings = { 
    fileName: "", // Имя файла для логирования
    showDate: "" // Настройка, определяющая показывать дату или нет
 }


function setUp (fileName_, showDate_) {
    if (!fs.existsSync(fileName_)){
        fs.writeFileSync(fileName_, "Logs")
        console.log("Файл создан")
    }

    if (showDate_ != true && showDate_ != false) {
        console.log("Указано неверное значение showDate, будет выставлено значение false")
        settings.showDate = false
    }
    else {
        settings.showDate = showDate_
    }
    settings.fileName = fileName_
    
}

function log (data) {
    try{
        var file = fs.readFileSync(settings.fileName)
    }
    catch(e){
        console.error("Произошла ошибка во время чтения файла! Возможно, Вы не настроили модуль или сделали это неправильно.")
    }
    if (settings.showDate) {
        let date_ob = new Date()
        let date = ("0" + date_ob.getDate()).slice(-2)
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2)
        let year = date_ob.getFullYear()
        let hours = date_ob.getHours()
        if (hours < 10) {
            hours = "0" + hours
        }
        let minutes = date_ob.getMinutes()
        if (minutes < 10) {
            minutes = "0" + minutes
        }
        let seconds = date_ob.getSeconds()
        if (seconds < 10) {
            seconds = "0" + seconds
        }

        let currentdate = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds
        try{
            fs.writeFileSync(settings.fileName, file + `\n[LOG] ${currentdate} --- ${data}`)
        }
        catch(e){
            console.error("Произошла ошибка во время записи данных  в файл! Возможно, Вы не настроили модуль или сделали это неправильно.")
        }
        console.log(`[LOG] ${currentdate} --- ${data}`);
    }
    else {
        try{
            fs.writeFileSync(settings.fileName, file + `\n[LOG] --- ${data}`)
        }
        catch(e){
            console.error("Произошла ошибка во время записи данных  в файл! Возможно, Вы не настроили модуль или сделали это неправильно..")
        }
        console.log(`[LOG] --- ${data}`);
    }
    
}

function info (data) {
    try{
        var file = fs.readFileSync(settings.fileName)
    }
    catch(e){
        console.error("Произошла ошибка во время чтения файла! Возможно, Возможно, Вы не настроили модуль или сделали это неправильно.")
    }
    if (settings.showDate) {
        let date_ob = new Date()
        let date = ("0" + date_ob.getDate()).slice(-2)
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2)
        let year = date_ob.getFullYear()
        let hours = date_ob.getHours()
        if (hours < 10) {
            hours = "0" + hours
        }
        let minutes = date_ob.getMinutes()
        if (minutes < 10) {
            minutes = "0" + minutes
        }
        let seconds = date_ob.getSeconds()
        if (seconds < 10) {
            seconds = "0" + seconds
        }

        let currentdate = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds
        try{
            fs.writeFileSync(settings.fileName, file + `\n[INFO] ${currentdate} --- ${data}`)
        }
        catch(e){
            console.error("Произошла ошибка во время записи данных  в файл! Возможно, Вы не настроили модуль или сделали это неправильно.")
        }
        console.log(`[INFO] ${currentdate} --- ${data}`);
    }
    else {
        try{
            fs.writeFileSync(settings.fileName, file + `\n[INFO] --- ${data}`)
        }
        catch(e){
            console.error("Произошла ошибка во время записи данных  в файл! Возможно, Вы не настроили модуль или сделали это неправильно.")
        }
        console.log(`[INFO] --- ${data}`);
    }
}

function error (data) {
    try{
        var file = fs.readFileSync(settings.fileName)
    }
    catch(e){
        console.error("Произошла ошибка во время чтения файла! Возможно, Вы не настроили модуль.")
    }
    if (settings.showDate) {
        let date_ob = new Date()
        let date = ("0" + date_ob.getDate()).slice(-2)
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2)
        let year = date_ob.getFullYear()
        let hours = date_ob.getHours()
        if (hours < 10) {
            hours = "0" + hours
        }
        let minutes = date_ob.getMinutes()
        if (minutes < 10) {
            minutes = "0" + minutes
        }
        let seconds = date_ob.getSeconds()
        if (seconds < 10) {
            seconds = "0" + seconds
        }

        let currentdate = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds
        fs.writeFileSync(settings.fileName, file + `\n[ERROR] ${currentdate} --- ${data}`)
        console.log(`[ERROR] ${currentdate} --- ${data}`);
    }
    else {
        try{
            fs.writeFileSync(settings.fileName, file + `\n[ERROR] --- ${data}`)
        }
        catch(e){
            console.error("Произошла ошибка во время записи данных  в файл! Возможно, Вы не настроили модуль.")
        }
        console.log(`[ERROR] --- ${data}`);
    }
}

function printSettings () {
    console.log(`showDate: ${settings.showDate}`)
}

module.exports = {
    log: log,
    info: info,
    error: error,
    printSettings: printSettings,
    setUp: setUp
}