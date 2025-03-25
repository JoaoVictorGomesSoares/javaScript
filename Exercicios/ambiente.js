
console.log('Vai começar...')
var contador = 1
while (contador <= 10) {
    console.log('Esta é a volta ' + contador)
    contador++
}
console.log('FIM!')
//primeiro executa o o laço depois o bloco de código

console.log('Vai começar...')
var contador = 1
do {
    console.log('Esta é a volta ' + contador)
    contador++
} while (contador <= 10)
console.log('FIM!')
//primeiro executa o bloco de código depois o laço

console.log('Vai começar...')
for (var contador = 1; contador <= 10; contador++) {
    console.log('Esta é a volta ' + contador)
}
console.log('FIM!')
//executa a variável, a condição e o incremento depois o bloco