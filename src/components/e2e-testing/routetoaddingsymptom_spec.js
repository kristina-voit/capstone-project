describe('route to adding a symptom', () => {
    it('should not visible on start page', () => {
      cy.visit('/')
    })
  
    it('go to', () => {
      cy.visit('/symptome')
        cy.contains("Stimmung & Symptome hinzufügen").click()
    })
  })