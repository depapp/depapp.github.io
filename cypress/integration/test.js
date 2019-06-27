/// <reference types="Cypress" />

describe('depapp\'s story e2e testing', () => {

  beforeEach(() => {
    cy.visit('index.html')
  })
  
  it('Profile Picture should be visible', () => {
    cy.get('.profile').should('be.visible')
  })

  it('Full Name should be correct', () => {
    cy.get('.name').should('have.text', 'DEPA')
    cy.get('.tagline').should('have.text', 'PANJIE PURNAMA')
  })

  it('Email address should be correct', () => {
    cy.get('.email').should('have.text', 'depapanjiep@gmail.com')
  })

  it('Phone number should be correct', () => {
    cy.get('.phone').should('have.text', '+62857-5941-9694')
  })

  it('LinkedIn name should be correct', () => {
    cy.get('.linkedin').should('have.text', 'Depa Panjie Purnama')
  })

  it('Facebook name should be correct', () => {
    cy.get('.facebook').should('have.text', 'Depa Panjie Purnama')
  })

  it('Instagram username should be correct', () => {
    cy.get('.instagram').should('have.text', 'depapp')
  })
  
  it('Twitter username should be correct', () => {
    cy.get('.twitter').should('have.text', '@depapp')
  })

  it('Github username should be correct', () => {
    cy.get('.github').should('have.text', 'depapp')
  })

  it('Steam username should be correct', () => {
    cy.get('.steam').should('have.text', 'urang_CIANJUR')
  })

  it('Web address should be correct', () => {
    cy.get('.web').should('have.text', 'educlopedia')
  })

  it('Education name should be correct', () => {
    cy.get('.meta > a').should('have.text', 'Telkom University')
  })

  it('Experiences number should be correct', () => {
    cy.get('.job-title').should('have.length', 9)
  })

  it('Skills number should be correct', () => {
    cy.get('.level-title').should('have.length', 6)
  })

})