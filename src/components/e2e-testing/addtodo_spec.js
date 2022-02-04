describe('add a to do', () => {
    it('should add a to do on the dashboard', () => {
      cy.visit('/')
    })
  
        it('.type() - type into a DOM element', () => {

 cy.get('input')
      .type('New to-do').should('have.value', 'New to-do')
      cy.contains("Hinzufügen").click()




    })
  })