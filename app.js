var express = require('express');
const Webflow = require('webflow-api');

// define new app
var app = express();

// Initialize the API 
const webflow = new Webflow({ token: 'INSERT API TOKEN' });

app.get('/', function(req, res){
    for(var x = 0; x<18; x++){
        console.log(x);
        // creates promise - default limit is 100 and cannot be greater
        // offset can be used to 'ignore' a number of results at the beginning
        const items = webflow.items({ collectionId: 'INSERT COLLECTION ID' }, { limit: 100 , offset: 100*x});

        items.then(function(i){
            var itemArray = i.items;
            itemArray.forEach(function(item){
                console.log('Name:', item.name,'| URI:', item.slug)
            });
        });
    }
    res.send('done')
});

app.listen(3000);
console.log('Server listening on port 3000!');