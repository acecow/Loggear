const fs = require('fs')

settings = { 
    fileName: "", // File for logging
    showDate: "" // Setting to show the date or not
 }


function setUp (fileName_, showDate_) {
    if (!fs.existsSync(fileName_)){
        fs.writeFileSync(fileName_, "Logs")
        console.log("File created")
    }

    if (showDate_ != true && showDate_ != false) {
        console.log("An invalid showdate value is specified, it will be set to false")
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
        console.error("An error occurred while reading the file! Perhaps you have not configured the module or have done it incorrectly.")
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
            console.error("An error occurred while writing data to a file! You may not have configured the module or may have done it incorrectly.")
        }
        console.log(`[LOG] ${currentdate} --- ${data}`);
    }
    else {
        try{
            fs.writeFileSync(settings.fileName, file + `\n[LOG] --- ${data}`)
        }
        catch(e){
            console.error("An error occurred while writing data to a file! You may not have configured the module or may have done it incorrectly.")
        }
        console.log(`[LOG] --- ${data}`);
    }
    
}

function info (data) {
    try{
        var file = fs.readFileSync(settings.fileName)
    }
    catch(e){
        console.error("An error occurred while reading a file! You may not have configured the module or may have done it incorrectly.")
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
            console.error("An error occurred while writing data to a file! You may not have configured the module or may have done it incorrectly.")
        }
        console.log(`[INFO] ${currentdate} --- ${data}`);
    }
    else {
        try{
            fs.writeFileSync(settings.fileName, file + `\n[INFO] --- ${data}`)
        }
        catch(e){
            console.error("An error occurred while writing data to a file! You may not have configured the module or may have done it incorrectly.")
        }
        console.log(`[INFO] --- ${data}`);
    }
}

function error (data) {
    try{
        var file = fs.readFileSync(settings.fileName)
    }
    catch(e){
        console.error("An error occurred while reading a file! Perhaps you have not configured the module.")
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
            console.error("An error occurred while writing data to a file! Perhaps you have not configured the module.")
        }
        console.log(`[ERROR] --- ${data}`);
    }
}

function printSettings () {
    console.log(`Settings:\nshowDate: ${settings.showDate}\nfile: ${settings.fileName}`)
}

module.exports = {
    log: log,
    info: info,
    error: error,
    printSettings: printSettings,
    setUp: setUp
}