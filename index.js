var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');

fs.stat('./cat.jpg', function(err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
});

fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem!'.green);
    console.log(data);
    fs.appendFile('./tekst.txt', '\nA tak wyglądają po zapisie!', function(err) {
        if (err) throw err;
        console.log('Zapisano!'.green);
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.green)
            console.log(data);
        });
    });
});

fs.readdir('../Zadanie-13.7-File_system__checking-environment', function(err, files) {
    if (err) throw err;
    console.log(files);
        fs.writeFile('./newlycreatedfile.txt', (files), function(err) {
            if (err) throw err;
            console.log('File has been saved!');
        });
});