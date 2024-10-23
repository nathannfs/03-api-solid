# GymPass style app

## RFs (Requisitos Funcionais)

- Funcionalidade da aplicação, o que será possível ele fazer na aplicação

- [X] Deve ser possível se cadastrar;
- [X] Deve ser possível se autenticar;
- [ ] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [ ] Deve ser possível o usuário obter seu histórico de check-ins;
- [ ] Deve ser possível o usuário buscar academias próximas;
- [ ] Deve ser possível o usuário buscar academias pelo nome;
- [ ] Deve ser possível o usuário realizar check-in em uma academia;
- [ ] Deve ser possível validar o check-in de um usuário;
- [ ] Deve ser possível cadastrar uma academia;

## RNs (Regras de negócio)

- Quais condições são aplicadas para tal requisito funcional, são caminhos da aplicação

- [X] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia;
- [ ] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [ ] O check-in só pode ser validado até 20 minutos após criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

## RNFs (Requisitos não-funcionais)

- São requisitos técnicos, não partem do cliente

- [X] A senha do usuário precisa estar criptografada;
- [X] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] Todas as listas de dados precisam estar paginadas com 20 itens por página;
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
