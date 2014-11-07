var url = process.argv[2];

//var url = "http://www.sasa.fi";
//var url = "http://hhm.halanen.net";

var request = require('request');
var fs = require('fs');
var lineReader = require('line-reader');
var fileSize = require('filesize');

var htmlFile = "./tmpHTML.txt";
var tmpFileNbr = 0;

if (url) {
    if(url.indexOf('http://') === -1) {
        url = 'http://' + url;
    }

    showText("\nChecking WEB-page: " + url + "\n");
    
    // Read main page of the given WEB-page
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // Write the content to temporary file
            fs.writeFile(htmlFile, body, 'utf8', function (err) {
                if (err) { 
                    return console.log(err);
                } else {
                    // read all lines from HTML-file:
                    lineReader.eachLine(htmlFile, function(line) {
                        var scriptFile = findScriptFile(line);
                        if (scriptFile) {
                            readJSFile(scriptFile);
                        }
                    }).then(function () {
                        // Get the size of the HTML file and print it out
                        var stats = fs.statSync(htmlFile);
                        var fileSizeInBytes = stats["size"];
                        showText("HTML file size: " + fileSize(fileSizeInBytes, {base: 2, round: 1}));
                        fs.unlinkSync(htmlFile);
                    });
                }
            });
        }
    });
} else {
    showText("Give a valid URL.");
}

function findScriptFile(line) {
    var SCRIPTOPENTAG = "<script";
    var SCRIPTCLOSETAG = "</script>";
    var retValue = false;
    
    // Find script open and closing tags
    var scriptOpenTag = line.search(SCRIPTOPENTAG);
    var scriptCloseTag = line.search(SCRIPTCLOSETAG);
    
    // If script is found
    if (scriptOpenTag >= 0) {
        // Get content between tags
        var scriptContent = line.slice(scriptOpenTag + SCRIPTOPENTAG.length, scriptCloseTag);
        
        // Change all '-characters to "-character
        scriptContent = scriptContent.replace(/'/g, '"');
        // Get Javascript file name
        var srcAttr = scriptContent.search('src=');
        if (srcAttr >= 0) {
            var srcContent = scriptContent.slice(srcAttr + 5, scriptContent.length);
            var srcClose = srcContent.search(/"/);
            if (srcClose >= 1) {
                srcContent = srcContent.slice(0, srcClose);
                if (srcContent.indexOf('http://') === -1) {
                    srcContent = url + srcContent;
                }
                retValue = srcContent;
            }
        }
    }
    return (retValue);
}

function readJSFile(file) {
    request(file, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var tmpFile = "tmp" + tmpFileNbr + ".txt";
            fs.writeFile(tmpFile, body, 'utf8', function (err) {
                if (err) { 
                    return console.log(err);
                } else {
                    var stats = fs.statSync(tmpFile);
                    var fileSizeInBytes = stats["size"];
                    showText("File: " + file + "   Filesize: " + fileSize(fileSizeInBytes, {base: 2, round: 1}));
                    fs.unlinkSync(tmpFile);
                }
            });
        }
        tmpFileNbr++;
    });
}

function showText(data) {
    console.log(data);
}