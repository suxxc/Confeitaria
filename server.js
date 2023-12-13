import { fastify } from 'fastify'

import { DatabaseMemory } from './database-memory.js'
const database = new DatabaseMemory()

const server = fastify ()

server.post('/bolos', (resquest, reply) => {
    const {tamanho, adicionais, sabor} = resquest.body

    database.create({
        tamanho: tamanho,
        adicionais: adicionais,
        sabor: sabor,
    })
    console.log(database.list())

    return reply.status(201).send()
})

server.get('/bolos', (resquest) => {
    const search = resquest.query.search
    console.log(search)
    const bolos = database.list(search)
    return bolos
})

server.put('/bolos/:id', (resquest, reply) => {
    const boloId = resquest.params.boloId
    const {tamanho, adicionais, sabor} = resquest.body
    const bolo = database.update(boloId, {
        tamanho: tamanho,
        adicionais: adicionais,
        sabor: sabor,
    })
    return reply.status(204).send()
})

server.delete('/bolos/:id', (resquest, reply) => {
    const boloId = resquest.params.id
    database.delete(boloId)
    return reply.status(204).send()
})

server.listen({
    port: 3333,
})