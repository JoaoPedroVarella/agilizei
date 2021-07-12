/// <reference types="cypress" />

context('Listagem', () => {
    it('Listagem sem registro', () => {

        cy.server();
        cy.route({
            method: 'GET',
            url: '**//api/1/databases/userdetails/collections/newtable?**',
            status: 200,
            response: []
        })

        cy.visit('WebTable.html')

        //utiliza para verificar o tamanho
        cy.get('div[role=row]').should('have.length', 1);
    });
    it('Listagem com registro', () => {

        cy.server();
        cy.route({
            method: 'GET',
            url: '**//api/1/databases/userdetails/collections/newtable?**',
            status: 200,
            response: 'fixture:webtable-get-unico'
        })

        cy.visit('WebTable.html')

        cy.get('div[role=row] div[role=gridcell]').eq(4).find('div').as('gridCellPhone')
        cy.get('@gridCellPhone').should('contain.text', '1234567890')


        /* iteração com lista  
            -> 1º .first
            -> .eq(Posição)
            -> ultimo .last
        */


    });
})