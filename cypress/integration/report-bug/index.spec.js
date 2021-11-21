describe('Test ReportBug', () => {
  beforeEach(() => {
    const url = 'http://localhost:3000';
    cy.visit(url);
  });

  it('tentando reportar um bug', () => {
    cy.contains('Bem Vindo');

    // para abrir o menu
    cy.get('[data-cy="menu-sidebar"]').click();

    cy.contains('Reportar Bug').click();

    cy.contains('- Reportar Bug -');
  });
});
