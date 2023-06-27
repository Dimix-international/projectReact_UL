export const updateProfile = (firstName: string, lastName: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    // click() - события нажатия

    cy.getByTestId('ProfileCard.firstname').clear().type(firstName);
    // clear() - очищает input
    // type - новое значение
    cy.getByTestId('ProfileCard.lastname').clear().type(lastName);

    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (id: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${id}`,
        headers: { Authorization: 'assaf' },
        body: {
            id: '4',
            first: 'test',
            lastname: 'user',
            age: 465,
            currency: 'EUR',
            country: 'Ukraine',
            city: 'Moscow',
            username: 'testuser',
            avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstName: string, lastName: string): Chainable<void>;
            resetProfile(id: string): Chainable<void>;
        }
    }
}
