# AutoFleet
AutoFleet app includes 3 pages:
- homePage - as a landing page for the site.
- showAll- shows the query result of all the available cars in the DB (from the JSON file that was provided).
- showSelectedArea- allows the user to select an area by drawing a polygon and get all the available cars there.

Used technologies:
- Node.js - as a server. 
- Express.js - to handle HTTP requests and manage routes 
- Atlas MongoDB&Mongoose - as a database to store information from JSON file and handle queries to find available cars.
- ejs - a view engine. allows injecting data to templets
- mapbox & turf - to handle map view and markers
- html, css, bootstrap - for styles
