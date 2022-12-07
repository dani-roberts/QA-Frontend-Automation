///<reference types="cypress"/>

describe('Exercise 2', () => {
  it(' Selection from dropdown row', () => {
    cy.visit('/#featured_dropdown_grid_category')

    cy.get('.iAgreeButton')
        .click({force: true})
        .wait(3)

    cy.get('#isc_2F.selectItemLiteText')
        .click()
        .wait(100)

    cy.get('#isc_42.pickListMenuBody')
        .scrollTo(0,1900,{ensureScrollable: false})
        .wait(1000)


    cy.get(`.pickListCell`)
        .contains('td', 1.29)
        .siblings()
        .contains('td', 'Exercise')
        .siblings()
        .contains('td', 'Ea')
        .click({force:true})
  })

})