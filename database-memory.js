import {randomUUID} from "node:crypto"
export class DatabaseMemory {
#bolos = new Map()

list(){
    return Array.from(this.#bolos.entries()).map((livroArray) => {
    //primeira posicao
        const id = livroArray[0]
    //segunda posicao
        const data = livroArray[1]

        return{
            id,
            ...data,
        }
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