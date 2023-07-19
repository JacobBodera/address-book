/// <reference types="cypress" />

describe('Address book functionality', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })
  it('Title is present', () => {
    cy.get('[data-test="title"]').should('have.text', 'Address Book')
  })
  it('Address list is displayed on the screen', () => {
    cy.get('[data-test="address-list"]').should('exist')
    cy.get('[data-test="closed-address-item-0"]').should('be.visible')
    cy.get('[data-test="closed-address-item-99"]').should('exist')
  })
  it('Closed address item contains image and name', () => {
    cy.get('[data-test="closed-address-item-0"]')
      .get('[data-test="image"]')
      .should('be.visible')
    cy.get('[data-test="closed-address-item-0"]')
      .get('[data-test="name"]')
      .should('be.visible')
  })
  it('Address item expands and displays detailed information', () => {
    cy.get('[data-test="closed-address-item-0"]').click()
    cy.get('[data-test="expanded-address-item-0"]').should('be.visible')
    cy.get('[data-test="detailed-information"]').should('be.visible')
  })
  it('List items can be expanded then closed again', () => {
    cy.get('[data-test="closed-address-item-0"]').click()
    cy.get('[data-test="expanded-address-item-0"]').click()
    cy.get('[data-test="closed-address-item-0"]').should('be.visible')
  })
})
