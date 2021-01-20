# SS Tech Test

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
- Install npm if you don't have it
- Install all dependencies
  `$ npm install`
- Start the server
  `$ npm start`
- Navigate to [http://localhost:3000/schools](http://localhost:3000/schools) in your browser

## Testing

### End to End Testing

- Start the server in the terminal if it is not running yet:
  `$ npm start`
- Start Cypress to run the tests:
  `$ npx cypress open`
- Click on: `Run all specs`

### Unit Testing

- Start the tests using: `$ npm test`
- Type `a` to view all tests


