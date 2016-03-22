(function () {
    'use strict';

    var container = document.querySelector('main');

    var app = {
        init: function() {
            console.log('start app.init');
            router.routes();

        }
    }
    var router = {
        routes : function () {
            console.log('router.routes');
            routie({
                '': function() {
                    window.location.hash = '#feed';
                    window.location.pathname = '';
                },
                'feed': function() {
                    data.getData('feed');
                },
                'appearance/:id' :function(id) {
                    console.log('id' + id);

                    data.getData('appearance' , id );
                }
            })
        }
    }
    var data = {
        getData : function(dataType, id) {
            console.log('getData');

            var request = new XMLHttpRequest();

            request.onreadystatechange = function() {
                console.log('request' + request.readyState);
                if(request.readyState === 4 ) {
                    if(request.status === 200) {
                        
                        // var data = JSON.parse(request.response);
                        console.log(request);
                        
                        template.feedTemplate(request.response);
                        if(dataType == 'appearance') { 
                            appearance();
                        }

                    }
                    else {
                        console.log('request error'+  request.status + ' ' + request.statusText);
                    }
                }
            };
            console.log('datatype' + dataType);
            if(dataType == 'feed') {

                request.open('GET', 'api/feed');
                // request.responseType = 'json'
                request.send();
            }
            else if(dataType == 'appearance') {
                request.open('GET', 'api/appearance/' + id);
                request.send();
                
            }
            
            

        }
    }
    var template = { 
        feedTemplate : function(data) {
            console.log('feed ' + data)
            container.innerHTML = data
        }
    }
    
    function appearance() {
        var firstProduct = document.querySelector('.product');
        var firstIndicator = document.querySelector(
            '.product-indicator[data-uuid="' + firstProduct.getAttribute('data-uuid') + '"]'
        );
        var indicators = document.querySelectorAll('.product-indicator');

        firstProduct.classList.add('product-active');
        firstIndicator.classList.add('product-indicator-active');

        Array.prototype.forEach.call(indicators, function (el) {
            el.addEventListener('click', function (event) {
                var id = event.currentTarget.getAttribute('data-uuid');

                document
                    .querySelector('.product-active')
                    .classList.remove('product-active');

                document
                    .querySelector('.product-indicator-active')
                    .classList.remove('product-indicator-active');

                document
                    .querySelector('.product[data-uuid="' + id + '"]')
                    .classList.add('product-active');

                event.currentTarget.classList.add('product-indicator-active');
            });
        });
    }

    
    app.init();
}());