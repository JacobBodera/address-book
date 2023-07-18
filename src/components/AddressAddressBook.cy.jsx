import React from 'react'
import AddressBook from './Address'

describe('<AddressBook />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AddressBook />)
  })
})