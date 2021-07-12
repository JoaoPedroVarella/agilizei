/// <reference types="cypress" />

let Chance = require('chance');
let chance = new Chance();


context('Cadastro', () => {
    it('Cadastro de usuário no site', () => {

        cy.server()
        cy.route('POST', '**//api/1/databases/userdetails/collections/newtable?**').as('postNewTable');

        cy.route('POST', '**//api/1/databases/userdetails/collections/usertable?**').as('postUserTable');

        cy.route('GET', '**//api/1/databases/userdetails/collections/newtable?**').as('getNewTable');



        cy.visit('Register.html');
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

        // click
        cy.get('#submitbtn').click()

        // aguardando retorno das apis do site -> melhor pratica que esperar por segundos
        cy.wait('@postNewTable').then((resNewTable) => {
            expect(resNewTable.status).to.eq(null)
        })
        cy.wait('@postUserTable').then((resUserTable) => {
            expect(resUserTable.status).to.eq(null)
        })
        cy.wait('@getNewTable').then((resGetTable) => {
            expect(resGetTable.status).to.eq(null)
        })

        //verifica se url contem algo, cy.url retorna url do momento
        cy.url().should('contain', 'Register')
    })
})


/*elementos - técnicas
ex:
input[placeholder = "First Name"]
input[ng-model^=Last] -- ^ pesquisa pela palavra no começo da frase
                         $ pesquisa pela palavra no final da frase
                         * coringa, pesquisa pela palavra em qql lugar

Para interagir com checkbox e radio buttons se utiliza o .check()

input[type=checkbox]

chance.js --> lib para dados aleatórios
              chance.first --> primeiro nome


cypress file upload --> para trabalhar com upload de arquivos -> seleciona o elemento em tela do tipo file e anexa um arquivo

rotas -> mapeia as requisições do site para trabalhar com cy.wait
cy.wait('@postNewTable').then((resNewTable) => {expect(resNewTable.status).to.eq(null)}) 
        ----> aguardando retorno das apis do site -> melhor pratica que esperar por segundos
        cy.route -> trabalhar com rotas 
        .as('') -> apelido dessas rotas
        cy.server -> deve startar para trabalhar com rotas


cy.url().should('contain', 'Register') - > verifica se url contem algo, cy.url retorna url do momento
*/