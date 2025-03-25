//SOMATORIO
function somatorio(n) {
    if (n == 0){
        return 'Erro'
    } else if (n == 1){
        return 1
    } else {
        return n + somatorio(n - 1)
    }
}

console.log(somatorio(6))