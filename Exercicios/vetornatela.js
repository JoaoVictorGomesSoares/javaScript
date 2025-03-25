let valores = [8, 6, 7, 4, 5]

valores.push(2, 9, 3, 1, 10)
valores.sort()

/*
for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores) {
    console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`)
}