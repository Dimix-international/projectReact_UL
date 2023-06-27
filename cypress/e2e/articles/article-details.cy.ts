let currentArticleId = '';

describe('Пользователь заходит на страницу статьи', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle()
            .then((article) => {
                cy.log(JSON.stringify(article));
                currentArticleId = article.id;
                // cy.log(JSON.stringify(article)); // логирование
                cy.visit(`articles/${article.id}`);
            });
    });

    afterEach(() => {
        cy.deleteArticle(currentArticleId);
    });

    it.skip('Статья успешно загрузилась', () => {
        cy.wait(1000);
        cy.getByTestId('ArticleDetailsPageInfo').should('exist');
    });

    it.skip('Рекоммендации к статье успешно загрузились', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });

    it.skip('Оставляем комментарий к статье', () => {
        cy.getByTestId('ArticleDetailsPageInfo');
        cy.wait(1000);
        cy.getByTestId('AddCommentForm').scrollIntoView(); // скролимся к форме
        cy.addComment('newComment');
        cy.wait(1000);
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });
    it.skip('И ставит оценку', () => {
        cy.getByTestId('ArticleDetailsPageInfo');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 4);
    });
    it('И ставит оценку с моковыми данными', () => {
        // мокаем запрос - чтобы не было реально запроса на бэк
        cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
        cy.getByTestId('ArticleDetailsPageInfo');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 4);
    });
});
