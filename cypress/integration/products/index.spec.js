describe('Test Products', () => {
  beforeEach(() => {
    const url = 'http://localhost:3000';
    cy.visit(url);
  });

  it('Teste tela de produtos', () => {
    cy.contains('Bem Vindo');

    // para abrir o menu
    cy.get('[data-cy="menu-sidebar"]').click();

    cy.contains('Produtos').click();

    cy.contains('- Produtos -');
    cy.contains('Ypioca');

  });
});
