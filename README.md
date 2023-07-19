# Address Book
## Getting the project setup
### Cloning the project
In an empty directory, clone the repository through HTTPS or SSH using `git clone`
### Running the application
- Go into the project directory: `cd address-book`  
- Install project dependencies: `npm install`  
- Open the project in dev: `npm run dev`
### Opening Cypress to run e2e tests
- Make sure that the project is running (should be on http://localhost:5173)  
- In a new terminal window run: `npm run cypress`  
- This will open Cypress and take you to the welcome page.
- Select **E2E Testing**  
- Select your browser of choice and click the **Start E2E Testing** button.  
- A file directory should be present that shows all of the available tests. There should only be one set of tests currently, **address.cy.js**, and clicking on it will initiate e2e test for the address list.
## Assignment Details
### Overall Approach
My approach to this project was to follow the following steps:
1. Initialize the project and get some useful libraries installed, such as Tailwind and Cypress.
   - Tailwind is a library that I only recently started using in a personal project but I find it quite intuitive and easy to use.
   - Cypress is a testing library that I've used in previous work terms so I'm comfortable with it. As well, it allows for both component and e2e testing
2. Get all of the random user data from the API.
   - I used axios to get the user data which is a library I have never worked with before but the documentation made it very easy to implement
3. Creating the necessary components.
   - I have created similar designs where there in a main component which generates a list of sub-components
   - I decided to create an `<AddressList/>` component which had access to the list of user data. In the component, I mapped through the array of data and sent each element as a prop to an `<Address/>` component
   - This component displays the information for each user and includes the logic to toggle to a more detailed user card.
4. Added testing using Cypress.
### Future Additions
1. I would like to add multiple pages so that only 10 addresses were listed at a time.
   - I could do this my have a state variable `page` which would be used to slice the array of users
   - This would only take a few lines of code so it wouldn't take too long
2. Search functionality.
   - Depending on the complexity of the search, this could take a little bit of time. I have done a similar type of search which used a plugin called typesense.
3. Added Redux to the project.
   - Redux would make the project much more clean in terms of storing the state of the application.
   - This would also allow me to store the user in the Redux store and make it so that the order of the addresses does not change on page load.
### Additions to Make Project More Robust
1. Intercept API request in testing and write a fixture so that the tests do not depend on the state of the api endpoint. This would isolate the tests to only validate their specific aspect of the project
2. Add more test
