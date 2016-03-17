    //credits to Dennis van Bennekom for the code
(function() {
    function init() {
        var links = document.querySelectorAll('a[data-url]');

        [].forEach.call(links, function(link) {
            link.addEventListener('click', function(event) {
                event.preventDefault();

                var url = event.currentTarget.getAttribute('data-url');
                var href = event.currentTarget.href;

                history.pushState(null, null, href);

                loadPage(url);
            });
        });

        window.addEventListener('popstate', function(event) {
            var url = '/api' + window.location.pathname;

            if (url === '/api/') {
                url = '/api/feed';
            }

            loadPage(url)
        });


        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js', { scope: './' })
            .then(function(reg) {
              console.log('registered sw (see console)');
              console.info('registered sw', reg);
            })
            .catch(function(err) {
              console.log('error registering sw (see console)');
              console.error('error registering sw', err);
            });
        } else {
            app.output('ServiceWorker is not supported');
        }
    }

    function loadPage(url, href) {
        var wrapper = document.querySelector('main');

        fetch(url)
            .then(response => response.text())
            .then(text => {
                wrapper.innerHTML = text;
                ready();
            });
    }

    function appearance() {
        // Appearance page
        var products = document.querySelectorAll('.product');

        products[0].classList.add('product-active');

        var firstIndicator = document.querySelector('.product-indicator[data-uuid="' + products[0].dataset.uuid + '"]');

        firstIndicator.classList.add('product-indicator-active');

        var indicators = document.querySelectorAll('.product-indicator');

        [].forEach.call(indicators, function(indicator) {
            indicator.addEventListener('click', function(event) {
                var id = event.target.dataset.uuid;

                var currentIndicatorActive = document.querySelector('.product-indicator-active');
                currentIndicatorActive.classList.remove('product-indicator-active');

                var newIndicatorActive = event.target;
                newIndicatorActive.classList.add('product-indicator-active');

                var currentActive = document.querySelector('.product-active');
                currentActive.classList.remove('product-active');

                var newActive = document.querySelector('.product[data-uuid="' + id + '"]');
                newActive.classList.add('product-active');
            });
        });
    }

    function ready() {
        init();

        // Credit: Robert van Steen
        if (/appearance/.test(window.location.href)) {
            appearance();
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        ready();
    }, false);
}());
