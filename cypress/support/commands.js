Cypress.Commands.add('login', (email, password) => {
  // TODO make an authentication by using the API !
  // 1. use cy.request to make a request https://docs.cypress.io/api/commands/request.html
  // => make a post request to https://conduit.productionready.io/api/users/login
  cy.request({
    log: false,
    method: 'POST',
    url: 'https://conduit.productionready.io/api/users/login',
    body: {
      user: {
        email,
        password,
      },
    },
  }).then(response => {
    const {token, username} = response.body.user
    window.localStorage.setItem('jwt', token)
    cy.log('Logged in as ' + username)
  })

  // with a payload like : {user: {email: email, password: password}}
  // 2. use the token in the response to authenticate yourself in the application
  // => just put the token value in the 'jwt' key in the local storage
  // window.localStorage.setItem('jwt', token)
})
