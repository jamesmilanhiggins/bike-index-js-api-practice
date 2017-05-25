# _Bike Index Google Maps_

#### _This lets users see stolen bikes in their inputted city, Thursday, May 25, 2017_

#### By _**Nicole Santamaria, and James Higgins**_

## Description

_This app calls a bike api and displays stolen bikes based off the user input. Then, it shows the stolen bikes on google maps, based off the stolen location_


## Setup/Installation Requirements

### Access Atom Files

* _Ensure connection to the Internet_
* _On a mac using spotlight search type in terminal_
* _Once in terminal enter the following commands to clone the file to your desktop and open the repository:_
```
$ cd desktop
$ git clone https://github.com/jamesmilanhiggins/bike-index-js-api-practice
$ cd bike-index-js-api-practice
$ npm install
$ bower install
$ touch .env [exports.apiKey = "Add-your-api-key-here";]
$ atom .
```

### Run the Program
* _Navigate to the repo on your desktop and run the following in a new tab in the terminal to start the localhost:3000 server:_

```
$ gulp build
$ gulp serve
```
* _Your browser should automatically open._

## Known Bugs

_You have to refresh to submit a new city_
_Note: If your API request is not successful and you get the following error in the console: Origin is not allowed by Access-Control-Allow-Origin., try installing the Allow-Control-Allow-Origin:_ [Chrome extension](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en)*


## Support and contact details

_Please contact Nicole Santamaria at NicoleRSantamaria@gmail.com or James Higgins at James.Milan.Higgins@gmail.com if you have any questions._

## Technologies Used

* JavaScript
* Node
* Bower
* Jquery
* Bootstrap

### API

*API from [Bike Index](https://bikeindex.org/)*
*API from [Google Maps](https://developers.google.com/maps/documentation/javascript/)*

### License

*This software is licensed under MIT license.*

Copyright (c) 2017 **_Nicole Santamaria and James Higgins_**



![Home page](/images/home-screenshot.png)
