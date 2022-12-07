describe('Exercise 3', () => {
  it('Iterate through each item containing name "Correction” ',
      () => {
        cy.visit('/#featured_nested_grid')

        cy.get('.iAgreeButton')
            .click()
            .wait(100)

          cy.get('#isc_2Jtable')
              .scrollTo(0,1000,{ensureScrollable: false})
              .wait(1000)

          cy.get('#isc_2Jtable.listTable')
            .contains('tr', 'Correction')
            .click()
            cy.get('.cellSelectedOver > div > span')
            .click();



      })
})