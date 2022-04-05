//  https://poetrydb.org/title/Ozymandias/lines.json 

const https = require('https');

const getData1 = function(url){
    https.get(url,(response) => {
        let data = '';
        response.on('data',(d) => {
            data += (d.toString());
         
        })
        response.on('end',() => {
            let newData = JSON.parse(data.toString())[0].lines;
            let set = function(newData){
                let i = 0;
                return function(){
                    console.log(newData[i]);
                    i++;
                    i %= newData.length;
                }
               
            }    
            
            let newId  = setInterval(set(newData),3000);
            setTimeout(() =>{
                clearInterval(newId);

            },15 * 60000)
        })
    }
    )};

module.exports.getData1 = getData1;
