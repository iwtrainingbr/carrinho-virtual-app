describe('Test facebook', () => {
  beforeEach(() => {
    const url = 'https://facebook.com';

    cy.visit(url);
  });

  it('tentando logar no facebook', () => {
    cy.contains('Facebook');

    cy.get('[id="email"]').type('cecilia@email.com');
    cy.get('[id="pass"]').type('12345678');

    cy.get('[type="submit"]').click();
  });
});
