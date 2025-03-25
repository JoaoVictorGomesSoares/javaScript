let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.5,
    engordar(p) {
        if(n >= 1) {
            console.log(`${amigo.nome} originalmente pesa ${amigo.peso}! Porém ${amigo.nome} engordou ${p} kg!`)
            this.peso += p
            console.log(`Agora o ${amigo.nome} pesa ${amigo.peso} kg! incentive ele!`)
        } else if(n < 0) {
            console.log(`${amigo.nome} originalmente pesa ${amigo.peso}! Porém ${amigo.nome} emagreceu ${p} kg!`)
            this.peso += p
            console.log(`Agora o ${amigo.nome} pesa ${amigo.peso} kg! elogie ele!`)
        } else {
            console.log(`${amigo.nome} não engordou! Dê parabens a ele!`)
        }
    }
}

let n = -5
amigo.engordar(n)


