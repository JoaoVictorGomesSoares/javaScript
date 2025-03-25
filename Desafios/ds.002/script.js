function contar() {
    let ini = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let raz = document.getElementById('txtrazao')
    let res = document.getElementById('resultado')

    if (ini.value.length == 0 || fim.value.length == 0 || raz.value.length == 0) {
        res.innerHTML = 'Impossivel contar! faltam dados!'
        //window.alert('[ERRO] faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value) 
        let r = Number(raz.value)
        if (r <= 0) {
            window.alert('RAZÃO INVALIDA! Considerando razão igual a 1')
            r = 1
        }
        if (i < f) {
            // Contagem crescente
            for(let c = i; c <= f; c += r) {
                res.innerHTML += ` \u{1f9d9} ${c} `
            }
        } else {
            // Contagem decrescente
            for(let c = i; c >= f; c -= r) {
                res.innerHTML += ` \u{1f9d9} ${c} `
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}