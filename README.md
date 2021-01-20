# SS Tech Test

Check out the app at [https://sstechtest.herokuapp.com/](https://sstechtest.herokuapp.com/)

## Acknowledgement

All information courtesy of School Spider.

## Description
Tech test which allows users to:
* Navigate through the website by clicking links
* Open a specific page by visiting the URL
* View the list of schools
* Search through the list of schools
* View the list of news for each school
* Search through the list of news for each school
* View the article for each news listing
* View the images for each news listing with lightbox functionality
* View the related files/pdfs for each news listing
* View the videos for each news listing

## URLs
The frontend URLs follow the paths from the backend. For example:
* List of schools - [http://localhost:3000/schools](http://localhost:3000/schools)
* List of news for a specific school - [http://localhost:3000/schools/1/news](http://localhost:3000/schools/1/news)
* Article for a news listing - [http://localhost:3000/schools/1/news/54182](http://localhost:3000/schools/1/news/54182)

## Technology used
* React
* JavaScript
* HTML
* CSS
* Cypress
* Jest/Enzyme
* FT Origami Components (previously used Tailwind CSS)
* React Router
* React Image Lightbox

## Installation

- Clone this repository
  `$ git clone git@github.com:AndrewHulme/SSTechTest.git`
- Navigate to local repository
  `$ cd SSTechTest`
- Install npm
- Install all dependencies
  `$ npm install`
- Start the server
  `$ npm start`
- Navigate to [http://localhost:3000/](http://localhost:3000/) in your browser

## Testing

### End to End Testing

- Start the server
  `$ npm start`
- Start Cypress to run the tests
  `$ npx cypress open`
- Click on `Run all specs` in Cypress

### Unit Testing

- Start the tests using `$ npm test`
- Type `a` to view all tests


