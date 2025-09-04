describe('Модуль Регистрация',  () => {
        it( 'Модуль Регистрация', () => {
                cy.visit('https://dev.profteam.su/registration')
                cy.get('input[autocomplete="username"]').type ('asd');
                cy.get('input[type="email"]').type ('asdas.tarpedkina05@mail.ru');
                cy.get('input[type="password"]').first().type ('Password1');
                cy.get('input[type="password"]').eq(1).type ('Password1');
                cy.get('div.registration-form__button').contains('Далее').should ('be.visible')
                    .and('not.have.css', 'display', 'none').click();

                cy.get('input[autocomplete="family-name"]').type ('Федотова');
                cy.get('input[autocomplete="given-name"]').type ('Алевтина');
                cy.get('input[autocomplete="additional-name"]').should ('exist').and ('not.have.attr', 'required');
                cy.get('input[autocomplete="additional-name"]').type ('Семеновна');
                cy.get('input[type="file"]').selectFile('C:/Users/fffal/profteam-tests/cypress/fixtures/avatar.jpg', { force: true });
                cy.get('div.registration-form__button').contains('Создать аккаунт'). should('be.visible')
                    .and('not.have.css', 'display', 'none').click();
                cy.visit('https://dev.profteam.su/account/main');
        });

        it( 'Некорректная почта (негативный) Модуль регистрация', () => {
                cy.visit('https://dev.profteam.su/registration')
                cy.get('input[autocomplete="username"]').type('lbabababa')
                cy.get('input[type="email"]').type('email-for-negative-test');
                cy.get('input[type="password"]').first().type('Password1');
                cy.get('input[type="password"]').eq(1).type('Password1');
                cy.get('div.registration-form__button').contains('Далее').click({ force: true});
        });

        it('Heкopрeктный логин (негативный) Модуль регистрация', () => {
                cy.visit('https://dev.profteam.su/registration')
                cy.get('input[autocomplete="username"]').type('loba@1+');
                cy.get('input[type="email"]').type('laba@mail.ru');
                cy.get('input[type="password"]').first().type('Password1');
                cy.get('input[type="password"]').eq(1).type('Password1');
                cy.get('div.registration-form__button').contains('Далее').click( {force: true});
        });

        it('Слишком простой пароль (негативный) Модуль регистрация', () => {
                cy.visit('https://dev.profteam.su/registration')
                cy.get('input[autocomplete="username"]').type('urtyu');
                cy.get('input[type="email"]').type('asdf@mail.ru');
                cy.get('input[type="password"]').first().type('123');
                cy.get('input[type="password"]').eq(1).type('123');
                cy.get('div.registration-form__button').contains('Далее').click({force: true} )
                cy.contains('Персональные данные').should('not.exist');
        });

        it('Несовпадение паролей (негативный) Модуль регистрация', () => {
                cy.visit('https://dev.profteam.su/registration')
                cy.get('input[autocomplete="username"]').type('baafasdfe');
                cy.get('input[type="email"]').type('ethdgbfx@mail.ru');
                cy.get('input[type="password"]').first().type('Password')
                cy.get('input[type="password"]').eq(1).type('dge53');
                cy.get('div.registration-form__button').contains('Далее').should('be.visible')
                    .and( 'not.have.css', 'display', 'none').click({force: true} );
        });

        it('Латиница в полях ввода персональных данных (негативный) Модуль регистрация', () => {
                cy.visit('https://dev.profteam.su/registration')
                cy.get('input[autocomplete="username"]').type('asdqwe');
                cy.get('input[type="email"]').type('adfzxcv@mail.ru');
                cy.get('input[type="password"]').first().type( 'Password1');
                cy.get('input[type="password"]').eq(1).type('Password1');
                cy.get('div.registration-form__button').contains('Далее').should('be.visible')
                    .and('not.have.css','display','none').click();
                cy.get('input[autocomplete="family-name"]').type('Fedotova');
                cy.get('input[autocomplete="given-name"]').type('Alevtina');
                cy.get('input[autocomplete="additional-name"]').should('exist').and('not.have.attr','required');
                cy.get('input[autocomplete="additional-name"]').type('Semenovna');
                cy.get('input[type="file"]').should('exist').and('not.have.attr','required');
                cy.get('input[type="file"]').selectFile('C:/Users/fffal/profteam-tests/cypress/fixtures/avatar.jpg', { force: true });
                cy.get('div.registration-form__button').contains( 'Создать аккаунт').click( {force: true});
        });
});
