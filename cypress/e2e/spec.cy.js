describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  it('fail', () => {
    expect(true).to.have(false);
  })
})