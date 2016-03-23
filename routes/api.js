/* jshint node: true */

var fs = require('fs');
var express = require('express');
var router = express.Router();
var startItems;
var endItems;
router.get('/feed', function(req, res, next) {    

    console.log(req);
    fs.readFile('resources/feed.json', 'utf8', function(err, data) {
        if(err) {
            res.status(404);
            next();
        }

        var item = JSON.parse(data);

        res.render('feed', { feed: true, title: 'feed', items: item, layout: false });
    });

});
router.get('/feed:uuid', function(req, res, next) {    

    
    fs.readFile('resources/feed.json', 'utf8', function(err, data) {
        if(err) {
            res.status(404);
            next();
        }

        var pag = req.params.uuid;
        var pagingArray = pag.split(',');
        
        var item = JSON.parse(data);

        var items = item.slice(pagingArray[0], pagingArray[1]);
        startItems += 5;
        endItems  += 5;
        res.render('feed', { feed: true, title: 'feed', items: items, layout: false });
    });

});
router.get('/appearance/:uuid', function(req, res, next) {

    fs.readFile('resources/appearance/'+req.params.uuid+'.json', 'utf8', function(err, data) {
        if(err) {
            res.status(404);
            next();
        }

        var item = JSON.parse(data);
        var products = [];

        item.product_occurrences.forEach(function(occurrence) {
            var product = fs.readFileSync('resources/product/'+occurrence.product.id+'.json', 'utf8');
            products.push(JSON.parse(product));
        });

        console.log(products);

        res.render('appearance', { title: item.title, item: item , products: products, layout: false});
    });

    //sendFile('appearance/'+req.params.uuid+'.json', res);
});

router.get('/product/:uuid', function(req, res, next) {
    sendFile('product/'+req.params.uuid+'.json', res);
});

// Reads and sends file contents
function sendFile(filename, res) {
    res.type('json');
    var file = fs.readFile('resources/'+filename, 'utf8', function(err, data) {
        if(err) {
            res.status(404);
            res.json({'status': 404, 'message': 'resource with name: '+filename+' not found'});
        } else {
            res.send(data);
        }
    });
}

module.exports = router;