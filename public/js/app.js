/*jslint browser:true */
/*global routie */
var clicks = 0;

(function () {
    'use strict';
    var container = document.querySelector('main');
    var loadMoreButton = document.getElementById('loadmore');
    var pagingStart = 0;
    var pagingEnd = 5;
    
    
    loadMoreButton.onclick = function () {

        
        pagingStart += 5;
        pagingEnd += 5;
        data.getData('feed', 0, pagingStart, pagingEnd);
        
        return false;
    };
    var app = {
        init: function() {
            router.routes();

        }
    };
    var router = {
        routes : function () {
            routie({
                '': function() {
                    window.location.hash = '#feed';
                    window.location.pathname = '';
                },
                'feed': function() {
                    
                    while (container.hasChildNodes()) {
                        container.removeChild(container.firstChild);
                    }
                    data.getData('feed', 0, 0, 5);
                },
                'appearance/:id' :function(id) {
                    data.getData('appearance' , id );
                }
            });
        }
    };
    var data = {
        getData : function(dataType, id, start, end) {
            

            var request = new XMLHttpRequest();

            request.onreadystatechange = function() {
                
                if(request.readyState === 4 ) {
                    if(request.status === 200) {
                        
                        
                        
                        template.feedTemplate(request.response, dataType);
                        
                        if(dataType === 'appearance') { 
                            appearance();
                        }

                    }
                    else {
                       
                    }
                }
            };
         
            if(dataType === 'feed') {

                request.open('GET', 'api/feed' + start + ',' + end
                    );
                request.send();
            }
            else if(dataType === 'appearance') {
                request.open('GET', 'api/appearance/' + id);
                request.send();
                
            }
        }
    };
    var template = { 
        feedTemplate : function(data, dataType) {
            if(dataType === 'appearance') {
                container.innerHTML = data;
            }
            else if(dataType === 'feed') {
                var wrapper = document.createElement('section');
                wrapper.innerHTML = data;
                  container.insertBefore(wrapper, container.childNodes[0]);
            }
            
        }
    };
    
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