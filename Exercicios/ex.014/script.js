function carregar () {
    var mensagem = window.document.getElementById('mensagem') // puxa a mensagem escrita na DIV com o ID 'mensagem'
    var imagem = window.document.getElementById('imagem') // puxa a imagem escrita na DIV com o ID 'imagem'
    var data = new Date() // variavel com a data do sistema (padrão)
    var hora = data.getHours() // variavel com a hora do sistema
    var minuto = data.getMinutes() // variavel com o minuto do sistema
    mensagem.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.` // exibe uma mensagem com a hora e o minuto
    if (hora >= 0 && hora < 12) {
        // Bom dia!
        imagem.src = 'manha.png' // define a foto que vai ser usada de 0 a 12 horas
        document.body.style.background = '#fddf7f' // define a cor de fundo que vai ser usada de 0 a 12 horas
} else if (hora >= 12 && hora < 18) {
        // Boa tarde!
        imagem.src = 'tarde.png' // define a foto que vai ser usada de 12 a 18 horas
        document.body.style.background = '#8c6e4b' // define a cor de fundo que vai ser usada de 12 a 18 horas
} else {
        // Boa noite!
        imagem.src = 'noite.png' // define a foto que vai ser usada de 18 a 24 horas
        document.body.style.background = '#4b4b4b' // define a cor de fundo que vai ser usada de 18 a 24 horas
}
}
