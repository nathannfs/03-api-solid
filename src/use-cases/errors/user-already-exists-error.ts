export class UserAlreadyExistsError extends Error {
  constructor() {
    // método construtor da classe erro
    super('E-mail already exists!')
  }
}
