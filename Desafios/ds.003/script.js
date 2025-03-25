function tabuada() {
    let num = document.getElementById('txtnumber')
    let tab1 = document.getElementById('seltabuada1')
    let tab2 = document.getElementById('seltabuada2')
    let tab3 = document.getElementById('seltabuada3')
    if(num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        //tabuada de 1 à 10
        let n = Number(num.value)
        let c1 = 1
        tab1.innerHTML = ''
        while (c1 <= 10) {
            let item = document.createElement('option')
            item.text = `${n} × ${c1} = ${n*c1}`
            item.value = `tab${c1}`
            tab1.appendChild(item)
            c1++
        }
        //tabuada de 11 à 20
        let c2 = 11
        tab2.innerHTML = ''
        while (c2 <= 20) {
            let item = document.createElement('option')
            item.text = `${n} × ${c2} = ${n*c2}`
            item.value = `tab${c2}`
            tab2.appendChild(item)
            c2++
        }
        //tabuada de 21 à 30
        let c3 = 21
        tab3.innerHTML = ''
        while (c3 <= 30) {
            let item = document.createElement('option')
            item.text = `${n} × ${c3} = ${n*c3}`
            item.value = `tab${c3}`
            tab3.appendChild(item)
            c3++
        }
    }
}