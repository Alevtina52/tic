describe('Модуль Личный кабинет', () => {
    it('Просмотр уведомлений Модуль личный кабинет', () => {
        cy.visit('https://dev.profteam.su/login');
        cy.get('input[autocomplete="username"]').type('qwe');
        cy.get('input[type="password"]').type('Password1');
        cy.get('div.login-form__button').contains('Войти').should('be.visible')
            .and('not.have.css', 'display', 'none').click();

        cy.url().should('include', '/account/main');
        cy.get('div.header-container__desktop', { timeout: 10000 }).should('be.visible').click();
        cy.visit('https://dev.profteam.su/notification');
    });
    it('Чтение уведомлений Модуль личный кабинет', () => {
        cy.visit('https://dev.profteam.su/login');
        cy.get('input[autocomplete="username"]').type('qwe');
        cy.get('input[type="password"]').type('Password1');
        cy.get('div.login-form__button').contains('Войти').should('be.visible')
            .and('not.have.css', 'display', 'none').click();

        cy.url().should('include', '/account/main');
        cy.get('div.header-container__desktop', { timeout: 10000 }).should('be.visible').click();
        cy.visit('https://dev.profteam.su/notification');
        cy.get('button[type="submit"]').eq(2).click();
    });
});