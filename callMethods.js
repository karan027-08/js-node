const filterCall = require('./filterMethod');
const searchCall = require('./searchMethod');
const historyCall = require('./showHistroy');
const callData = require("./deleteMethod");

const url = "https://wizard-world-api.herokuapp.com/Spells";


const readline = require('readline');
callData.addData(url);
const ql = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});



const searchMethod = (url) => {

    //switch case for question 
    ql.question("Enter your choice \n 1 for Search \n 2 for Filter Data \n 3 for Show your History\n 4 for to delete data \n 5 for termination of program \n", async function (choice) {

        switch (choice) {
            //using async and await to wait for untill the execution of method is complete.
            case "1":
                ql.question("Enter value of Name ", async function (name1) {
                    await searchCall.getResult(name1, url);
                    await toTerminate();
                });
                break;
            case "2":
                //question for to enter the value of key and pair and showing output in table format
                ql.question("Enter the Key ", function (type) {
                    ql.question("Enter the value ", async function (value) {
                        let out = type + value + "\n";
                        await filterCall.getFilter(type, value, url, out);
                        await toTerminate();
                    })
                });
                break;
            case "3":
                ql.question("To see your search history type 'ok' ", async function (answer) {

                    if (answer === "ok") {
                        await historyCall.historyShow(url);

                    }
                    await toTerminate();
                });
                break;
            case "4":
                ql.question("Enter value of Name to delete form data  ", async function (deleteName) {
                    await callData.deleteData(deleteName);
                    await toTerminate();
                });
                break;
            case "5":
                ql.close();
                break;
            default:
                let text = "Enter Valid Option"
                console.log(text);
        }

    });
}





searchMethod(url);
//function for termination of program.
function toTerminate() {
    return new Promise(resolve => {
        ql.question("Do you want to continue type 'Y' or to close type 'N' ", async (answer) => {
            if (answer === "Y") {
                await searchMethod("https://wizard-world-api.herokuapp.com/Spells");

            }
            if (answer === "N") {
                ql.close();
            }
            resolve();
        });
    });
}