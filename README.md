# GymPass style app

## RFs (Requisitos Funcionais)

- Funcionalidade da aplicação, o que será possível ele fazer na aplicação

- [X] Deve ser possível se cadastrar;
- [X] Deve ser possível se autenticar;
- [X] Deve ser possível obter o perfil de um usuário logado;
- [X] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [X] Deve ser possível o usuário obter seu histórico de check-ins;
- [X] Deve ser possível o usuário buscar academias próximas (até 10km);
- [X] Deve ser possível o usuário buscar academias pelo nome;
- [X] Deve ser possível o usuário realizar check-in em uma academia;
- [X] Deve ser possível validar o check-in de um usuário;
- [X] Deve ser possível cadastrar uma academia;

## RNs (Regras de negócio)

- Quais condições são aplicadas para tal requisito funcional, são caminhos da aplicação

- [X] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [X] O usuário não pode fazer 2 check-ins no mesmo dia;
- [X] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [X] O check-in só pode ser validado até 20 minutos após criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

## RNFs (Requisitos não-funcionais)

- São requisitos técnicos, não partem do cliente

- [X] A senha do usuário precisa estar criptografada;
- [X] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [X] Todas as listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (Json Web Token);

## SOLID

### S

### O

### L

### I

### D - Dependency Inversion Principle

- Inverter a ordem de como a dependência chega no caso de uso, recebo as dependências como parâmetro

## Controller -> agrupa endpoints relacionados a uma determinada funcionalidade

## Use cases -> são cenários que descrevem como um sistema será utilizado por seus usuários, mostrando as interações entre o usuário e o sistema em diferentes situações

## Repository -> é um padrão de design que serve para abstrair a comunicação com o banco de dados em um arquivo separado, facilitando a manutenção e organização do código

## TDD -> Test-driven development

- Diz que se desenvolve o teste de alguma regra de negócio antes da implementação, o teste ajuda a validar se a implementação está certa
