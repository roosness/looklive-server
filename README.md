# LookLive server

##Opdrachten week 1 - Analyse
Voor de looklive app is aangepast heeft deze de volgende prestaties online:
Voor het analyseren van de performance is de web throttling ingesteld op Good 3g, zodat er een constante snelheid in de tests is. 
Before: 
DOMContentLoaded: 1.48 S
Load event: 15.51S
<img src="/public/screenshots/before_ev.png" alt="">

###Semantische HTML & CSS
De huidige HTML bevat veel ongebruikte divs, divs in het algemeen die het geheeld onleesbaar maakten. Deze zijn veranderd in een aantal sections en articles. Daarnaast zijn de twee grootste veranderingen in de CSS het toevoegen van Flexbox in plaats van floats, en het gebruik van transforms inplaats van animate left. 

Before: 
DOMContentLoaded: 1.48 S
Load event: 15.51S

After: 
DOMContentLoaded:985 ms
Load event:  14.76 S

screenshot afer:
<img src="/public/screenshots/after_html.png" alt="">

###Interface Icons
De iconen in het menu zijn veranderd in een image sprite, die dan met CSS gepositioneerd wordt. 
De verbeteringen zijn echter minimaal voor de performance. 

Before:
DOMContentLoaded: 985 ms
Load event:  14.76 S

After: 
DOMContentLoaded: 979 ms
Load event: 14.74S
After:
<img src="/public/screenshots/icon_after.png" alt="">


###Header img verkleind
De originele header img was 1.87 MB en werd op elke device op dit formaat ingeladen . Door de afbeelding kleiner te maken en in verschillende formaten als een responsive image weer te geven is de performance er goed op vooruit gegaan.

Before: 
DOMContentLoaded: 979 ms
Load event: 14.74S


After: 
DOMContentLoaded: 904 ms
Load event: 11.17S
<img src="/public/screenshots/after_header.png" alt="">

###One Page App
Een single page App scheelt in principe niet veel in performance, maar zal vooral in het ‘verder klikken’ schelen, omdat dan niet de complete pagina opnieuw geladen hoeft te worden. 
Ik heb gebruik gemaakt van routie.js.

Before: 
DOMContentLoaded: 904 ms
Load event: 11.17S

After: 
DOMContentLoaded: 773 ms
Load event: 11.59 S
<img src="/public/screenshots/after_spa.png" alt="">
###Google Fonts aangepast
De google font link die momenteel ingeladen wordt stuurt veel meer versies dan daadwerkelijk gebruikt worden. Na de aanpassing wordt enkel de 400 gebruikt. 

Before: 
DOMContentLoaded: 773 ms
Load event: 11.59 S

After: 
DOMContentLoaded: 1.16 S
Load event: 11.86 S
<img src="/public/screenshots/after_google.png" alt="">

##Week 2:
###Service worker
De service worker zal veel schelen in de perfomance.
Momenteel gebruik ik de service worker om de CSS, het logo, de header image, de icon sprite en de app.js op te slaan. Dit zijn de dingen die in principe iedere keer hetzelfde zullen zijn.

Before: 
DOMContentLoaded: 1.16 S
Load event: 11.86 S

After: 
DOMContentLoaded: 134 ms
Load event: 575 ms
<img src="/public/screenshots/after_worker.png" alt="">

##Bronnen:
Bronnen
http://designingforperformance.com/optimizing-markup-and-styles/
https://css-tricks.com/efficiently-rendering-css/
https://browserdiet.com/en/#html
http://stackoverflow.com/questions/21253714/why-is-single-page-apps-faster-when-it-generally-has-to-make-more-requests-per-p

