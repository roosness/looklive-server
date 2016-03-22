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
hier komt de service worker
-wat staat er in de service worker etc
alleen de afbeeldingen worden niet geladen omdat deze online ergens staan.

screenshot before:
<img src="/public/screenshots/screenshot_spa_after.png" alt="">
screenshot after:
<img src="/public/screenshots/screenshot_serviceworker_after.png" alt="">

##Opdrachten week 3 - Analyse
###3.2 optimaliseer HTTP Requests
Hoeveel zijn het aantal nu?

screenshot before:

screenshot after:

###3.3 Optimaliseer content images

screenshot before:

screenshot after:

###3.4 Optimaliseer web fonts

screenshot before:

screenshot after:


##Onderzoek Progressive web App

####bronnen:
##Onderzoek Task Managers


####bronnen:

TODO:

ONLINE WEB SERVER (HEROKU?)
VIEWPORT IN DE META VOOR MOBILE
NAVIGAITE SINGLE PAGE
