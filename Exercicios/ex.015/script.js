function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var resultado = document.querySelector('div#resultado')
    if (fano.value.length <= 3 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 5) {
                //Bebê
                img.setAttribute('src', 'bebo.png')
            } else if (idade < 14) {
                //Criança
                img.setAttribute('src', 'crianco.png')
            } else if (idade < 18) {
                //Adolecente
                img.setAttribute('src', 'adolecento.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso.png')
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 5) {
                //Bebê
                img.setAttribute('src', 'beba.png')
            } else if (idade < 14) {
                //Criança
                img.setAttribute('src', 'crianca.png')
            } else if (idade < 18) {
                //Adolecente
                img.setAttribute('src', 'adolecenta.png')
            } else if (idade < 50) {
                //Adulta
                img.setAttribute('src', 'adulta.png')
            } else {
                //Idosa
                img.setAttribute('src', 'idosa.png')
            }
        }
        resultado.innerHTML = `<p>Você é um ${genero} com ${idade} anos.</p>`
        resultado.appendChild(img)
    }

}