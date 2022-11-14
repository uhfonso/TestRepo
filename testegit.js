// importa os modulos

var axios = require('axios');
var fs = require('fs');
var base64 = require('base-64');

let token = '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'
let file = fs.readFileSync("testegit.js").toString();
console.log(file);
var content = base64.encode(file);
console.log(content);
updateFileApi(token, content)

function updateFileApi(token, content) {
    var data = JSON.stringify( {
        "message": "ficheiro",
        "content":`${content}`
    });

    var config = {
        method: 'put',
        url: 'https://api.github.com/repos/uhfonso/TestRepo/contents/testegit.js',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        data: data 
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        
        .catch(function(error) {
            console.log(error);
        })
}

