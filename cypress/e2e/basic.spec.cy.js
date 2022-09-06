/// <reference types="Cypress" />

// describe('My First Test', () => {
//   it('Gets, types and asserts', () => {
//     cy.visit('https://example.cypress.io')

//     cy.contains('type').click()

//     cy.url().should('include', '/commands/actions')
//     cy.get('.action-email')
//       .type('fake@email.com')
//       .should('have.value', 'fake@email.com')
//   })
// })

describe('Start Page', () => {
  it('successfully loads', () => {
    cy.visit('/')
  })

  it('successfully log in', () => {
    cy.get("input").type("qwerty");
    cy.get("button").click();
  })

})

describe('Posts Page', () => {

  it('successfully load data', () => {
    cy.request('GET', 'https://my-json-server.typicode.com/vanadium-str/fakeJSON/data')
  })

  it('renders logo and button Add link', () => {
    cy.get("[data-cy='logo']").contains("nClone App");
    cy.get("[data-cy='button-add-link']").contains("Add link");
  })

  it('renders the list of posts', () => {
    cy.get("[data-cy='title-row']").should("have.length", 5);
  })

})