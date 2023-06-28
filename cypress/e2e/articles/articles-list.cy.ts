describe('Пользователь зашел на страницу списка статей', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            cy.visit('articles');
        });
    });

    it.skip('Список статей успешно загружен', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
        // have.length.greaterThan - элементов должно быть больше 3
    });

    it('Список статей успешно загружен из моковых данных', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
        // have.length.greaterThan - элементов должно быть больше 3
    });
});
