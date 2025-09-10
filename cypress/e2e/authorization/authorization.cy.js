describe('Модуль Авторизация', () => {
    it('Авторизация на сайте', () => {
        cy.visit('https://dev.profteam.su/login');
        // Ввод логина
        cy.get('input[autocomplete="username"]').type('qwe');
        // Ввод пароля
        cy.get('input[type="password"]').type('Password1');
        // Проверка видимости кнопки "Войти" и клик по ней
        cy.get('div.login-form__button').should('be.visible')
            .and('not.have.css', 'display', 'none').click();
        // Проверка перехода на главную страницу после авторизации
        cy.visit('https://dev.profteam.su/account/main');
    });
    it('Неверный логин или пароль (негативный) модуль авторизации', () => {
        cy.visit('https://dev.profteam.su/login');
        cy.get('input[autocomplete="username"]').type('qwe');
        cy.get('input[type="password"]').type('rdcgQ23');
        cy.get('div.login-form__button').should('contain', 'Войти')
            .and('not.have.css', 'display', 'none').click();
    });
});