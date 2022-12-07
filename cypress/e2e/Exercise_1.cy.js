describe('Exercise 1', () => {
    before('Load page',() =>{
        cy.intercept('GET', `${Cypress.config('baseUrl')}/#featured_tile_filtering`)
    })
  it('Fill in fields', () => {
      cy.visit('/#featured_tile_filtering')
        cy.get('.iAgreeButton')
            .click()

        cy.get("input[name='commonName']")
            .should('be.visible')
            .type('a')

      cy.get(".hSliderThumb")
          .should('be.visible')
          .click({ multiple: true, force: true })
          .trigger('mousedown')
          .trigger('mousemove',{clientX: 822, clientY: 408})
          .trigger('mouseup')

        cy.get("#isc_2O.sliderTrackActive")
            .should('be.visible')

        cy.get('.sliderValueText')
            .should('be.visible')
            .should('contain.text', 40)

      cy.get('#isc_3J > .comboBoxItemPicker')
          .click()

      cy.get("#isc_6A.pickListMenu")
          .should('be.visible')
          .contains("Life Span")
          .click()

      cy.get('#isc_3O')
          .click()

      cy.get('#isc_3X.tileGrid')
          .find('.simpleTile')
          .should('be.visible')
          .should('have.length.greaterThan', 12)
  })
})
