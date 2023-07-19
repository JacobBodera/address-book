# Address Book
---
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
