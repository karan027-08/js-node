const https = require('https');
const fs = require("fs");

function deleteData(deleteName) {
    return new Promise(resolve => {
        fs.readFile("./uploadedFilteredData/dataFile.txt","utf8", (err,data) =>{
            data = JSON.parse(data.toString());
            // console.log(data);
            data = data.filter(item => item.name !== deleteName);

            fs.writeFile('./uploadedFilteredData/dataFile.txt',JSON.stringify(data), function (err) {
                if (err) return console.log(err);
                //console.log(newData);
                resolve();
            });
            
        })

    })
    
};
function addData(url) {
    return new Promise(resolve => {
        https.get(url, (response) => {
            let data = '';
            response.on('data', (d) => {
                data += (d.toString());
    
            })
            response.on('end', () => {
                // file location where all the history 
                let newData = JSON.parse(data.toString());
                let output = JSON.stringify(newData);
                // console.log(output)
                fs.writeFile('./uploadedFilteredData/dataFile.txt',output, function (err,data) {
                    if (err) return console.log(err);
                    //console.log(newData);
                    resolve();
                });
            })
        }
        )
    })
    
};
module.exports.addData = addData;
module.exports.deleteData = deleteData;