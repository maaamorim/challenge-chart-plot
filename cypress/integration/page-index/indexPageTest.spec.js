/// <reference types="cypress" />

describe('index page tests', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  })

  // header and footer component checks
  it('can load header and footer component properly', () => {
    cy.get('[data-cy=header]').should('be.visible')
    cy.get('[data-cy=header-text]').should('be.visible')
    cy.get('[data-cy=header-text]').should('have.text', 'Mateus Amorim\'s Challenge')
    cy.get('[data-cy=footer]').should('be.visible')
    cy.get('[data-cy=footer-btn]').should('be.visible')
    cy.get('[data-cy=footer-btn]').should('have.text', 'GENERATE CHART')
  })

  // text editor component checks
  it('can load text editor component properly', () => {
    cy.get('[data-cy=text-editor]').should('be.visible')
    cy.get('[data-cy=text-editor]').click().type('this is a test')
    cy.get('[data-cy=text-editor]').should('contain.text', 'this is a test')
  })

  // graph component checks
  it('can load graph component properly', () => {
    cy.fixture('sampleData').then(data => {
      cy.get('[data-cy=text-editor]').should('be.visible')
      cy.get('[data-cy=text-editor]').click().type(data.simple, { parseSpecialCharSequences: false })
      cy.get('[data-cy=footer-btn]').click()
      cy.get('[data-cy=chart]').should('be.visible')
    })
  })

  // runs the example with text from the sample screen shot
  it('can run example from screenshot', () => {
    cy.fixture('sampleData').then(data => {
      cy.get('[data-cy=text-editor]').should('be.visible')
      cy.get('[data-cy=text-editor]').click().type(data.full, { parseSpecialCharSequences: false, delay: 1 })
      cy.get('[data-cy=footer-btn]').click()
      cy.get('[data-cy=chart]').should('be.visible')
    })
  })

  // runs a different example, with other selectors and groups
  it('can run a different example', () => {
    cy.fixture('sampleData').then(data => {
      cy.get('[data-cy=text-editor]').should('be.visible')
      cy.get('[data-cy=text-editor]').click().type(data.fruits, { parseSpecialCharSequences: false, delay: 1 })
      cy.get('[data-cy=footer-btn]').click()
      cy.get('[data-cy=chart]').should('be.visible')
    })
  })
})
