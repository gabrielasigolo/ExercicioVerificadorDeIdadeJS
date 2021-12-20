function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'menino.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'garoto.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'homemadulto.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'menina.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'garota.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'mulheradulta.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        img.style.textAlign = 'center'
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.<p>`
        res.appendChild(img)
    }
}