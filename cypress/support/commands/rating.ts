export const setRate = (startCount = 5, feedback = 'feedback') => {
    cy.getByTestId(`StarRating.${startCount}`).click();
    cy.getByTestId('RatingCard.Comment').type(feedback);
    cy.getByTestId('RatingCard.Send').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            setRate(startCount: number, feedback: string): Chainable<void>;
        }
    }
}
