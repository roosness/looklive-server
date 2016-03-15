(function () {
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> gh-pages
    'use strict';

    /**
     * Invoked when the page is ready.
     *
     * @param  {Function} fn
     * @return {void}
     */
    function ready(fn) {
        if (document.readyState !== 'loading') {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }

    /**
     * Set the classes on the appearence page.
     *
     * @return {void}
     */
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

    ready(function () {
        if (/appearance/.test(window.location.href)) {
            appearance();
        }
    });
}());

<<<<<<< HEAD
=======
>>>>>>> donnywals/master
>>>>>>> gh-pages
