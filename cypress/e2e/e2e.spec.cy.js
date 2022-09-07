/// <reference types='Cypress' />

describe('Start Page', () => {
  it('successfully loads', () => {
    cy.visit('/')
  })

  it('successfully log in', () => {
    cy.get('input').type('qwerty').as('username')
    cy.get('button').click();
  })

})

describe('Posts Page', () => {

  // beforeEach(() => {
  //   cy.visit('http://localhost:3000')
  // })
  
  context('Renders all posts', () => {
    it('successfully load data', () => {
      cy.request('GET', 'https://my-json-server.typicode.com/vanadium-str/fakeJSON/data')
    })

    it('renders logo and button Add link', () => {
      cy.get("[data-cy='logo']").contains('nClone App');
    })

    it('renders the list of posts', () => {
      cy.getByData('title-row').should('have.length', 5);
    })

    it('opens comments', () => {
      cy.getByData('comments').first().click().getByData('comment-title');
    })

    // it('close comments', () => {
    //   cy.getByData('comments').first().click().getByData('comment-title').should('be.hide');
    // })
  })

  context('Add post section', () => {

    it('fill the form', () => {
      cy.get("[data-cy='button-add-link']").contains('Add link').click();
      cy.getByData('input-title').type('some title').should('have.value', 'some title');
      cy.fixture('image.jpg').then((fileContent) => {
        cy.getByData('input-img').attachFile({
           fileContent,
           fileName: 'image',
           encoding: 'base64',
           mimeType: 'image/jpg',
         });
       });
      cy.get('img').should('be.visible');
      cy.getByData('add-post-button').click();
      cy.getByData('title-row').should('have.length', 6);
    })

    it('try to send empty form', () => {
      cy.get("[data-cy='button-add-link']").contains('Add link').click();
      cy.getByData('add-post-button').click();
      cy.getByData('write-title').contains('Please, write a title of the post');
    })

    it('try to send only title', () => {
      cy.getByData('input-title').type('some title').should('have.value', 'some title');
      cy.getByData('add-post-button').click();
      cy.getByData('write-title').contains('Please, write a title of the post');
    })

    it('try to send only image', () => {
      cy.getByData('input-title').clear();
      cy.fixture('image.jpg').then((fileContent) => {
        cy.getByData('input-img').attachFile({
           fileContent,
           fileName: 'image',
           encoding: 'base64',
           mimeType: 'image/jpg',
         });
       });
      cy.get('img').should('be.visible');
      cy.getByData('add-post-button').click();
      cy.getByData('write-title').contains('Please, write a title of the post');
    })

    it('back to the posts', () => {
      cy.getByData('back-from-add-post').click();
      cy.getByData('title-row').should('have.length', 6);
    })
  })

  context('Current post Page', () => {
    it('Open and close post', () => {
      cy.getByData('title-post').first().click();
      cy.getByData('current-title-post');
      cy.getByData('back-from-current-title').click();
      cy.getByData('title-row').should('have.length', 6);
    })
  })

  context('Add a comment', () => {
    it('Try to add empty comment', () => {
      cy.getByData('add-comment').first().click();
      cy.getByData('write-comment').contains('Please, write your comment:');
      cy.getByData('add-comment-button').click();
      cy.getByData('write-comment').contains('Please, write your comment:');
    })

    it('Back from add comment', () => {
      cy.getByData('back-from-comment-button').click();
      cy.getByData('title-row').should('have.length', 6);
    })

    it('Add comment', () => {
      cy.getByData('add-comment').first().click();
      cy.getByData('write-comment').contains('Please, write your comment:');
      cy.getByData('add-comment-textarea').type('Some comment').should('have.value', 'Some comment');
      cy.getByData('add-comment-button').click();
      cy.getByData('title-row').should('have.length', 6);
      cy.getByData('comments').first().contains('1 comments');
      cy.getByData('comments').first().click();
      cy.getByData('comment-username').first() // contains username
    })
  })

})




//     cy.url().should('include', '/commands/actions')
// it.only('Course: Testing Your First Next.js Application', () => {
//   cy.getByData('course-0').find('a').eq(3).click()
//   cy.location('pathname').should('eq', '/testing-your-first-application')