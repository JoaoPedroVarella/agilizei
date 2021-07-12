/// <reference types="cypress" />

let Chance = require('chance');
let chance = new Chance();


When(/^informar meu dados$/, () => {
	cy.get(':nth-child(1) > :nth-child(2) > .form-control').type(chance.first())
        cy.get(':nth-child(1) > :nth-child(3) > .form-control').type(chance.last())
        cy.get('#eid > .form-control').type(chance.email())
        cy.get('input[ng-model^=Phone').type(chance.phone({ formatted: false }))

        //check -> radio's button e 
        cy.get('input[value=FeMale]').check()
        cy.get('input[type=checkbox').check('Cricket')
        cy.get('input[type=checkbox').check('Movies')

        //select -> tipo select e select2
        cy.get('select#Skills').select('Javascript');
        cy.get('select#countries').select('Argentina');
        cy.get('select#country').select('Australia', {force: true});
        cy.get('select#yearbox').select('1996');
        cy.get('select[ng-model^=month').select('May');
        cy.get('select#daybox').select('9');
        cy.get('input#firstpassword').type('Mm@123456')
        cy.get('input#secondpassword').type('Mm@123456')

        //upload de imagem
        cy.get('#imagesrc').attachFile('foto.jpg')
});

When(/^salvar$/, () => {
	cy.get('#submitbtn').click()
});

Then(/^devo ser cadastrado com sucesso$/, () => {
	cy.url().should('contain', 'Register')
});
