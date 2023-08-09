describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.sp.senac.br')

    cy.get('.mburger').click()

    cy.get('#txtLoginNaoLogadoMob').click()
    cy.get('#login-email').type('johndoe@example.com')
    cy.get('#login-password').type('example123')
    cy.get('#btnLoginHeader').click()
  })
})