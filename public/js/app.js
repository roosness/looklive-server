(function () {
    "use strict";
    
    var product = document.querySelector('.product');
    
    function change(e) {
        var cur = e.currentTarget;
        document.querySelector('.product-indicator-active').classList.remove('product-indicator-active');
        cur.classList.add('product-indicator-active');
        document.querySelector('.product-active').classList.remove('product-active');
        document.querySelector('.product[data-uuid="' + cur.getAttribute('data-uuid') + '"]').classList.add('product-active');
    }
    
    function init() {
        var productAttr = product.getAttribute('data-uuid'),
            indicator = document.querySelector('.product-indicator[data-uuid="' + productAttr + '"]'),
            indicators = document.getElementsByClassName('product-indicator');

        product.classList.add('product-active');
        indicator.classList.add('product-indicator-active');

        [].forEach.call(indicators, function (elem) {
            elem.addEventListener('click', change, false);
        });
    }
    
    if (document.querySelector && window.addEventListener) {
        if (product) {
            init();
        }
    }
              
}());