// @ts-check
describe('Navigation', function() {
  it('should navigate through all the pages', function() {
    cy.log('Visit homepage')
    // TODO visit the / url
    cy.visit('/')

    // TODO check that the title is equal to 'Conduit'
    cy.title().should('eq', 'Conduit')

    // TODO count the articles
    cy.get('.article-preview').should('have.length', '10')

    // TODO check that tag list is present
    cy.get('.tag-list').should('exist')

    cy.log('Visit author page')
    // TODO enter to a author page
    cy.visit('/@Romain')

    // TODO check that author image is visible
    cy.get('.user-img').should('be.visible')

    // TODO check that h4 title is visible too
    cy.get('h4').should('be.visible')

    cy.log('Visit article page')
    // TODO come back to the home page
    cy.visit('/')

    // TODO select the second article
    cy.get('.container.page .article-preview:nth-child(2) h1').click()
    
    // TODO check that url contain 'article' keyword
    cy.url().should('contain', 'article/')

    // TODO check that the banner exist
    cy.get('.banner').should('be.visible')

    // TODO check that the article content exist too
    cy.get('.article-content').should('be.visible')

    cy.log('Logging in')
    // TODO go to login page
    cy.visit('/login')

    // TODO enter the cypress@devoxx.fr email
    cy.get('input[type=email]').type('cypress@devoxx.fr')

    // TODO enter the cypressdevoxx password
    cy.get('input[type=password]').type('cypressdevoxx')

    // TODO check that the redirection to the home occurred
    cy.get('.btn[type=submit]').click()
    cy.url().should('eq', Cypress.config('baseUrl') + '/')
  })
})
