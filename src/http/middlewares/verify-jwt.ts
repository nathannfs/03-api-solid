import type { FastifyReply, FastifyRequest } from 'fastify'

export async function verifyJwt(request: FastifyRequest, reply: FastifyReply) {
  try {
    // busca o token dentro do cabeçalho da requisição e verifica se bate com o token criado
    await request.jwtVerify()
  } catch (err) {
    return reply.status(401).send({ message: 'Unauthorized!' })
  }
}
