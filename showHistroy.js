const https = require('https');
const fs = require("fs");


// function for displaying search history.
function historyShow(url) {
    return new Promise(resolve => {
        https.get(url, (response) => {
            let data = '';
            response.on('data', (d) => {
                data += (d.toString());
    
            })
            response.on('end', () => {
                // file location where all the history 
                fs.readFile('./uploadedFilteredData/History.txt',"utf8" , function (err,data) {
                    if (err) return console.log(err);
                    console.log(data);
                    resolve();
                });
    
            })
    
    
        }
        )
    })
    
};

module.exports.historyShow = historyShow;