import { fastify } from 'fastify'

import { DatabaseMemory } from './database-memory.js'
const database = new DatabaseMemory()

const server = fastify ()

server.post('/bolos', (request, reply) => {

    const boloId = request.params.livroId

    const {tamanho, adicionais, sabor} = request.body
    const bolo = database.update(boloId, {
        tamanho: tamanho,
        adicionais: adicionais,
        sabor: sabor,
    })
    return reply.status(201).send()
})

server.get('/bolos', () => {
    const bolos = database.list()
    console.log(bolos)
    return bolos
})

server.put('/bolos/:id', () => {
    return "Atualizar"
})

server.delete('/bolos/:id', () => {
    return "Atualizar"
})
server.listen({
    port: 3333,
})