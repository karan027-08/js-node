const https = require('https');
const fs = require("fs");

function getFilter(type, value, arrFileName) {
    return new Promise(resolve => {
        fs.readFile('./uploadedFilteredData/dataFile.txt', "utf8", (err, data) => {
            let newData = JSON.parse(data);
            //creating new array to store filter data 
            let arr = [];
            //code for filtering of data 
            for (x of newData) {
                for (y in x) {
                    if (y === type && x[y] === value) {
                        arr.push(x);
                        break;
                    }
                }
            }
            if (arr.length <= 0) {
                console.log("Enter Valid Input")
            }
            else {
                //print the filter data in table format.
                console.table(arr);
            }
            //function to genrate random number for creation of file .

            function randomNumber(min, max) {
                return Math.floor(Math.random() * (max - min) + min);
            }
            //converting the filtered data to string to stored in a .txt file
            let output = JSON.stringify(arr);
            let fileName1 = 'filterDataFile' + randomNumber(1, 1000000000);

            arrFileName.push(fileName1);


            //apending to of data to new file 

            fs.appendFile(`./uploadedFilteredData/${fileName1}.txt`, output, function (err) {
                if (err) return console.log(err);
                console.log(`./uploadedFilteredData/${fileName1}.txt`);

            });
            //apending the user input in history.txt file 
            fs.appendFile('./uploadedFilteredData/History.txt', "Filter : " + type + " " + value + "\n", async function (err) {
                if (err) return console.log(err);
                console.log('./uploadedFilteredData/History.txt');
                resolve();

            });




        })

    })
};

module.exports.getFilter = getFilter;
