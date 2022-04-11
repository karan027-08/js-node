const https = require('https');
const fs = require("fs");
const { resolve } = require('path');



//function return the searched data as a object by passing value of Name key and url of api
function getResult(name1) {
    return new Promise(resolve => {
        // https.get(url,(response) => {
        //     let data = '';
        //     response.on('data',(d) => {
        //         data += (d.toString());

        //     })
        //     response.on('end',() => {
        //         let newData = JSON.parse(data.toString());

        //         // check for Value is present or not 
        //         let flag = true;
        //         for (x in newData){
        //             if (name1 === newData[x].name){
        //                 console.log(newData[x]);
        //                 flag = false;

        //             }
        //             // else{
        //             //     console.log("Enter Valid Input");
        //             //     break;
        //             // }
        //         }
        //         if(flag){
        //             console.log("Enter Valid input")
        //         }
        //        //push the value to the histroy.txt file for log 
        //         fs.appendFile('./uploadedFilteredData/History.txt',"Search : " + name1 + "\n", function (err) {
        //         if (err) return console.log(err);
        //         // console.log('./uploadedFilteredData/History.txt');
        //         resolve();
        //         }); 
        //     })

        // }
        // )
        fs.readFile('./uploadedFilteredData/dataFile.txt', "utf8", (err, data) => {
            if (err) {
                throw err;
            }
            let newData = JSON.parse(data);
            // console.log(newData)

            // check for Value is present or not 
            let flag = true;
            for (x in newData) {
                if (name1 === newData[x].name) {
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
                // console.log('./uploadedFilteredData/History.txt');
                resolve();
            });
        })
    })
};

module.exports.getResult = getResult;