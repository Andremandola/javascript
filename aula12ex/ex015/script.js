function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    }else {
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (document.getElementById('mas').checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebe homem.jpg')
            }else if (idade < 21) {
                //jovem
            }else if (idade <50) {
                //adulto
            }else {
                //idoso
            }
        } else if (document.getElementById('fem').checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criança

            }else if (idade < 21) {
                //jovem
            }else if (idade <50) {
                //adulto
            }else {
                //idoso
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
    
}