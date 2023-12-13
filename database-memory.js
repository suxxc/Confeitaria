import {randomUUID} from "node:crypto"
export class DatabaseMemory {
#bolos = new Map()

list(search){
    return Array.from(this.#bolos.entries()).map((boloArray) => {
    //primeira posicao
        const id = boloArray[0]
    //segunda posicao
        const data = boloArray[1]

        return{
            id,
            ...data,
        }
    })
    .filter(bolos => {
        if(search) {
            return bolos.tamanho.includes(search)
        }
        return true
    })
}

create(bolos){
    const boloId = randomUUID()
    this.#bolos.set(boloId, bolos)
}

update(id, bolo){
    this.#bolos.set(id, bolo)
}

delete(id){
    this.#bolos.delete(id)
}
}