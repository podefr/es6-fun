// Use with traceur: traceur simple-generators.js --experimental

"use strict";

var fs = require("fs");

function getFile(fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function (err, file) {
            if (err) {
                reject(err);
            }
            resolve(file);
        });
    });
}

function getFilesInDir() {
    return new Promise(function (resolve, reject) {
        fs.readdir(".", function (err, directory) {
            if (err) {
                console.log("mince")
                reject(err);
            }
            resolve(directory);
        });
    });
}

function getMDFiles() {
    getFilesInDir().then(function (files) {
        files
            .filter(isMDFile)
            .forEach(getFile);
    });
}

function isMDFile(file) {
    return /\.md$/.test(file);
}

var mdFiles = getMDFiles();
