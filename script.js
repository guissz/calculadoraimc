const calcular = document.getElementById('form')

calcular.addEventListener('submit', function(e) {
    e.preventDefault()

    const peso = document.getElementById('peso').value
    const altura = document.getElementById('altura').value

    const imc = (peso / Math.pow(altura, 2)).toFixed(2)

    const valor = document.getElementById('valor')
    let descricao = ''

    valor.classList.add('atencao')

    document.getElementById('informacoes').classList.remove('hidden')

    if (imc < 18.5) {
        descricao = 'Cuidado! Você está abaixo do peso!'
    } else if (imc >= 18.5 && imc <= 25) {
        descricao = 'Você está no peso ideal!'
        valor.classList.remove('atencao')
        valor.classList.add('normal')
    } else if (imc > 25 && imc <= 30) {
        descricao = 'Cuidado! Você está com sobrepeso!'
    } else if (imc > 30 && imc <= 35) {
        descricao = 'Cuidado! Você está com obesidade moderada!'
    } else if (imc > 35 && imc <= 40) {
        descricao = 'Cuidado! Você está com obesidade severa!'
    } else {
        descricao = 'Cuidado! Você está com obesidade mórbida!'
    }

    valor.textContent = imc.replace('.', ',')
    document.getElementById('descricao').textContent = descricao
})