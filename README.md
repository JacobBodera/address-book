# Address Book
## Getting the project setup
### Cloning the project
In an empty directory, clone the repository through HTTPS or SSH using `git clone`
### Running the application
Go into the project directory,  
`cd address-book`  
Install project dependencies,  
`npm install`  
Open the project in dev,  
`npm run dev`
### Opening Cypress to run e2e tests
Make sure that the project is running (should be on http://localhost:5173)  
In a new terminal window run,  
`npm run cypress`  
This will open Cypress and take you to the welcome page.
Select **E2E Testing**  
Select your browser of choice and click the **Start E2E Testing** button.  
A file directory should be present that shows all of the available tests. There should only be one set of tests currently, **address.cy.js**, and clicking on it will initiate e2e test for the address list.
## Assignment Details
### Overall Approach
My approach to this project was to follow the following steps:
1. Initialize the project and get some useful libraries installed, such as Tailwind and Cypress.
   - Tailwind is a library that I only recently started using in a personal project but I find it quite intuitive and easy to use.
   - Cypress is a testing library that I've used in previous work terms so I'm comfortable with it. As well, it allows for both component and e2e testing
2. Get all of the random user data from the API
  - I used axios to get the user data which is a library I have never worked with before but the documentation made it very easy to implement
3. Creating the necessary components
  - I
