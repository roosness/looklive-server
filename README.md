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

####bronnen:
* http://designingforperformance.com/optimizing-markup-and-styles/
* https://css-tricks.com/efficiently-rendering-css/
* https://browserdiet.com/en/#html

###1.3: Optimaliseer CSS
De grootste verandering tussen 1.2 en 1.3 is onder andere het verwijderen van CSS float. Van float en andere fluid layout opties wordt vaker gezegd dat deze vertragend zijn voor het inlanden van de pagina. Toch is er bij de uiteindelijke snelheidstest weinig verschil te zien. Maar, alle beetjes helpen?

screenshot before:
<img src="/public/screenshots/screenshot_html_after.png" alt="">
screenshot after:
<img src="/public/screenshots/screenshot_CSS_after.png" alt="">

####bronnen
* https://css-tricks.com/efficiently-rendering-css/
https://boagworld.com/dev/why-you-should-care-about-css-page-performance/

###1.4: Interface icons
screenshot before:
<img src="/public/screenshots/screenshot_html_after.png" alt="">
screenshot after:
<img src="/public/screenshots/screenshot_interfaceicons_after.png" alt="">
###1.5: SPA

###Extra: Jquery
###Extra: header img



TODO:

VIEWPORT IN DE META VOOR MOBILE
