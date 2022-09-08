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
      cy.request('GET', 'https://my-json-server.typicode.com/vanadium-str/fakeJSON/data');
    })

    it('check route', () => {
      cy.location('pathname').should('eq', '/allPosts');
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

  })

  context('Add post section', () => {

    it('check route', () => {
      cy.get("[data-cy='button-add-link']").contains('Add link').click();
      cy.url().should('include', '/addLink');
    })

    it('fill the form', () => {
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
      const typeText = 'some title'
      cy.getByData('input-title').type(typeText).should('have.value', typeText);
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

    it('check route', () => {
      cy.getByData('title-post').first().click();
      cy.location('pathname').should('eq', '/currentPost');
    })

    it('Open and close post', () => {
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
    })
  })

  context('Count votes', () => {
    it('Increase and decrease votes of post', () => {
      cy.getByData('votes').first().contains('0');
      cy.getByData('increase-vote').first().click();
      cy.getByData('votes').first().contains('1');
      cy.getByData('decrease-vote').first().click();
      cy.getByData('votes').first().contains('0');
    })
  })

})