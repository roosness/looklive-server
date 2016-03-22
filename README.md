# LookLive server

##Opdrachten week 1 - Analyse
Voor de looklive app is aangepast heeft deze de volgende prestaties online:
Voor het analyseren van de performance is de web throttling ingesteld op 3g, zodat er een constante snelheid in de tests is. 
<img src="/public/screenshots/screenshot_before_ev.png" alt="">

###1.2: Semantische HTML
Semantische HTML maakt je webpagina niet per se sneler, maar zeker leesbaarder en meer maintainable. Daarnaast zal de CSS automatisch geupdate moeten worden.

Screenshot before:
<img src="/public/screenshots/screenshot_before_ev.png" alt="">
screenshot afer:
<img src="/public/screenshots/screenshot_html_after.png" alt="">
De html file sizes zijn iets kleiner geworden, en door iets specifiekere selectoren is de snelheid toch iets vooruit gegaan.
bronnen:
http://designingforperformance.com/optimizing-markup-and-styles/
https://css-tricks.com/efficiently-rendering-css/
https://browserdiet.com/en/#html

###1.4: Interface icons
screenshot before:
<img src="/public/screenshots/screenshot_html_after.png" alt="">
screenshot after:
<img src="/public/screenshots/screenshot_interfaceicons_after.png" alt="">
###1.5: SPA
Before:
<img src="/public/screenshots/screenshot_headerimg_after.png" alt="">
After:

###Extra: header img
De headerimg is verkleind van 2mb naar 3 afzonderlijke images, allen niet groter dan 100 kb. Deze worden vervolgens in een responsive image gebruikt, en het scheelt aanzienlijk in de tijd.
screenshot before:
<img src="/public/screenshots/screenshot_interfaceicons_after.png" alt="">
screenshot after:
<img src="/public/screenshots/screenshot_spa_after.png" alt="">

##Opdrachten week 2 - Analyse
###2.1 Service Worker
Zie de serviceworkerV2 branch

##Opdrachten week 3 - Analyse
###3.2 optimaliseer HTTP Requests
Hoeveel zijn het aantal nu?
zie slides

screenshot before:

screenshot after:

###3.3 Optimaliseer content images

screenshot before:

screenshot after:

###3.4 Optimaliseer web fonts
http://thenewcode.com/878/Slash-Page-Load-Times-With-CSS-Font-Subsetting
screenshot before:

screenshot after:


##Onderzoek Progressive web App

####bronnen:
##Onderzoek Task Managers
Task managers voeren bepaalde taken die door de gebruiker aangegeven worden herhaaldelijk uit. Deze taken kunnen alle kanten op gaan. Van het automatisch compilen van JS bestanden tot het toevoegen van browser prefixes aan CSS. Task managers werken vooral goed in teamverband. Een taskmanager kan een team dwingen om allemaal in dezelfde standaard schrijft. Bekende task managers zijn gulp en grunt.
Toch kan een task manager ook een aantal problemen met zich meebrengen. Zo hangt een groot gedeelte van je workflow af van meerdere plugins, die allemaal updates met zich meebrengen. 
NPM zou hier een betere oplossing voor zijn. Deze is een stuk minder geavanceerd, en


- welke task managers
- welke tasks


####bronnen:
http://blog.keithcirkel.co.uk/why-we-should-stop-using-grunt/
http://gulpjs.com/
http://brunch.io/
https://jmperezperez.com/gulp-js/
http://www.100percentjs.com/just-like-grunt-gulp-browserify-now/

TODO:

ONLINE WEB SERVER (HEROKU?)
VIEWPORT IN DE META VOOR MOBILE
