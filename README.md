# LookLive server

##Opdrachten week 1 - Analyse
Voor de looklive app is aangepast heeft deze de volgende prestaties online:
Voor het analyseren van de performance is de web throttling ingesteld op 4G, zodat er een constante snelheid in de tests is. 
Before: 
* D0MContentLoaded: 1.48 S
* Load event: 15.51S
<img src="/public/screenshots/before_ev.png" alt="">

###Semantische HTML & CSS
De huidige HTML bevat veel ongebruikte divs, divs in het algemeen die het geheeld onleesbaar maakten. Deze zijn veranderd in een aantal sections en articles. Daarnaast zijn de twee grootste veranderingen in de CSS het toevoegen van Flexbox in plaats van floats, en het gebruik van transforms inplaats van animate left. 

Before: 
* D0MContentLoaded: 1.48 S
* Load event: 15.51S

After: 
* D0MContentLoaded:985 ms
* Load event:  14.76 S

screenshot afer:
<img src="/public/screenshots/after_html.png" alt="">

###Interface Icons
De iconen in het menu zijn veranderd in een image sprite, die dan met CSS gepositioneerd wordt. 
De verbeteringen zijn echter minimaal voor de performance. 

Before:
* D0MContentLoaded: 985 ms
* Load event:  14.76 S

After: 
* D0MContentLoaded: 979 ms
* Load event: 14.74S
After:
<img src="/public/screenshots/icon_after.png" alt="">


###Header img verkleind
De originele header img was 1.87 MB en werd op elke device op dit formaat ingeladen . Door de afbeelding kleiner te maken en in verschillende formaten als een responsive image weer te geven is de performance er goed op vooruit gegaan.

Before: 
* D0MContentLoaded: 979 ms
* Load event: 14.74S


After: 
* D0MContentLoaded: 904 ms
* Load event: 11.17S
<img src="/public/screenshots/after_header.png" alt="">

###One Page App
Een single page App scheelt in principe niet veel in performance, maar zal vooral in het ‘verder klikken’ schelen, omdat dan niet de complete pagina opnieuw geladen hoeft te worden. 
Ik heb gebruik gemaakt van routie.js.

Before: 
* D0MContentLoaded: 904 ms
* Load event: 11.17S

After: 
* D0MContentLoaded: 773 ms
* Load event: 11.59 S
<img src="/public/screenshots/after_spa.png" alt="">
###Google Fonts aangepast
De google font link die momenteel ingeladen wordt stuurt veel meer versies dan daadwerkelijk gebruikt worden. Na de aanpassing wordt enkel de 400 gebruikt. 

Before: 
* D0MContentLoaded: 773 ms
* Load event: 11.59 S

After: 
* D0MContentLoaded: 702 S
* Load event: 11.86 S
<img src="/public/screenshots/after_google.png" alt="">
##Conclusie Week 1:
Met alle aanpassingen is de totale laadtijd van de looklive server met 3,56 seconde gedaald, wat een goede vooruitgang was. Het grootste verschil heeft het aanpassen van de HTML en CSS gedaan, en de verkleining van de header image. 

* D0MContentLoaded: 1.48 S > 702 ms
* Load event: 15.51S > 11.86

##Week 2:
###Service worker
De service worker zal veel schelen in de perfomance.
Momenteel gebruik ik de service worker om de CSS, het logo, de header image, de icon sprite en de app.js op te slaan. Dit zijn de dingen die in principe iedere keer hetzelfde zullen zijn.

Before: 
* D0MContentLoaded: 1.16 S
* Load event: 11.86 S

After: 
* D0MContentLoaded: 134 ms
* Load event: 575 ms
<img src="/public/screenshots/after_worker.png" alt="">

Het toevoegen van de service worker heeft een drastische impact gehad op de laadtijd van de browser, en zal vooral van toepassing als de gebruiker een slechte internetverbinding heeft.

##Week 3:
### Reduce HTTP Requests
Door een 'laadmeer' knop boven aan de pagina toe te voegen is bij het opstarten van de pagina momenteel het aantal requests verlaagd van 165 naar 21. Daarnaast heb ik een aantal grunt tasks aangemaakt waarmee CSS automatisch wordt samengevoegd, Javascript automatisch wordt samen gevoegd, en alles ge-minified. Omdat ik maar 1 CSS bestand had, en maar 1 Javascript, scheelt het niet in het aantal requests, maar kan dit in de toekomst wel van pas komen. 

Voor de test is de service worker uitgeschakeld.
Before: 
* D0MContentLoaded: 1.16 S
* Load event: 11.86 S

After: 
* D0MContentLoaded: 119 ms
* Load event: 1.03 S.

Iedere keer als er op laad meer geklikt wordt, worden er weer nieuwe requests uitgevoerd.
<img src="/public/screenshots/http_after.png" alt=""> 

### optimize content images
Om de images automatisch te kunnen optimaliseren heb ik een task aan grunt toegevoegd die hier voor zorgd. De images die nu gebruikt worden, zijn echter al handmatig geoptimaliseerd, en zal dus niet schelen in de tijd.

Voor de test is de service worker uitgeschakeld.
Before: 
* D0MContentLoaded: 1.16 S
* Load event: 11.86 S

After: 
* D0MContentLoaded: 1.16 S
* Load event: 11.86 S

<img src="/public/screenshots/after_google.png" alt="">
### Fonts
Als google fonts in de head wordt ingeladen, wordt dat gezien als een render-blocking bestand. Met de web font loader is het mogelijk om de fonts async in te laden. 
In de praktijk is het verschil minimaal, omdat er ook een extra request uitgevoerd moet worden.

Voor de test is de service worker uitgeschakeld.
Before: 
* D0MContentLoaded: 141ms
* Load event: 1.06 S

Before: 
* D0MContentLoaded: 144 ms
* Load event: 1.06 S.

##Bronnen:
http://designingforperformance.com/optimizing-markup-and-styles/
https://css-tricks.com/efficiently-rendering-css/
https://browserdiet.com/en/#html
http://stackoverflow.com/questions/21253714/why-is-single-page-apps-faster-when-it-generally-has-to-make-more-requests-per-p
https://www.keycdn.com/blog/web-font-performance/
https://www.keycdn.com/blog/blocking-the-dom/
https://www.lockedowndesign.com/load-google-fonts-asynchronously-for-page-speed/


##Onderzoek Progressive Web App
Een Progressive Web App is een middenweg tussen een web applicatie en een native applicatie. Het speelt zich nogsteeds af in de browser, waardoor er niets geinstalleerd hoeft te worden. 
Een Progressive Web App maakt gebruik van de Service Workers API, dat offline caching ondersteund. Hierdoor kunnen bestanden op een later moment opnieuw gebruikt worden, wat goed van pas komt voor gebruikers met een offline of trage internet verbinding. Daarnaast kunnen er ook push notificaties aan de applicatie toegevoegd worden.

Google omschrijft de Progressive Web App als:
* Progressive. Werkt voor elke gebruiker, ongeacht de browser, omdat het een progressive enhancement is.
* Responsive. Voor elke context toepasbaar.
* Connectivity independent. Werkt offline of met een slechte verbinding.
* App like. Voelt als een echte app
* Installable. Gebruikers kunnen de Progressive Web App opslaan op hun homescreen zonder van een app store gebruik te maken.

###Bronnen:
https://developers.google.com/web/progressive-web-apps
http://developer.telerik.com/featured/what-progressive-web-apps-mean-for-the-web/
https://remysharp.com/2016/03/18/progressive-web-apps-the-long-game

##Onderzoek Task managers
Een taskmanager is iets waar ik nog niet eerder aan begonnen ben. Ik was allang trots op het feit als ik iets op github kreeg. Task managers voeren bepaalde taken die door de gebruiker aangegeven worden herhaaldelijk uit. Deze taken kunnen alle kanten op gaan. Van het automatisch compilen van JS bestanden tot het toevoegen van browser prefixes aan CSS. Task managers werken vooral goed in teamverband. Een taskmanager kan een team dwingen om allemaal in dezelfde standaard schrijft. Bekende task managers zijn gulp en grunt.
Toch kan een task manager ook een aantal problemen met zich meebrengen. Zo hangt een groot gedeelte van je workflow af van meerdere plugins, die allemaal updates met zich meebrengen. 

Bekende taskmanagers:
* Gulp
* Grunt
* NPM

Ik heb besloten gebruik te maken van Grunt. De code van grunt is goed leesbaar en er is veel informatie te vinden over Grunt. Via Grunt voer ik de volgende tasks uit:
* Het minimaliseren van afbeeldingen
* JSLint
* CSSLint
* Minify en samenvoegen van CSS
* Minify en samenvoegen van JS

welke shit heb ik in mijn task manager gepropt?
###Bronnen:
https://css-tricks.com/gulp-for-beginners/



