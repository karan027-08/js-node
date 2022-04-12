const https = require('https');
const fs = require("fs");
//function return the searched data as a object by passing value of Name key and url of api
function getResult(name1) {
    return new Promise(resolve => {
        fs.readFile('./uploadedFilteredData/dataFile.txt', "utf8", (err, data) => {
            if (err) {
                throw err;
            }
            let newData = JSON.parse(data);
            // check for Value is present or not 
            let flag = true;
            for (x in newData) {
                if (name1.toLowerCase() === newData[x].name.toLowerCase()) {
                    console.log(newData[x]);
                    flag = false;
                }
            }
            if (flag) {
                console.log("Enter Valid input")
            }
            // push the value to the histroy.txt file for log 
            fs.appendFile('./uploadedFilteredData/History.txt', "Search : " + name1 + "\n", function (err) {
                if (err) return console.log(err);
                resolve();
            });
        })
    })
};

module.exports.getResult = getResult;