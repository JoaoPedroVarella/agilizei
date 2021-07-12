Feature: Cadastro

    Como usuário, desejo realizar cadastro
    Para que possa acessas o sistema

    Scenario: Cadastro de novo usuário
        Given que acesso o site
        When informar meu dados
        And salvar
        Then devo ser cadastrado com sucesso