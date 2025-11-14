function calcular() {
    let n = Number(prompt('Digite um número:'))

    let res = document.getElementById('resultado')

    res.innerHTML = `<p>O número digitado foi <strong>${n}</strong></p>`

    res.innerHTML += `<p>Parte inteira: <strong>${Math.trunc(n)}</strong></p>`

    res.innerHTML += `<p>Arredondado: <strong>${Math.round(n)}</strong></p>`

    res.innerHTML += `<p>Floor (para baixo): <strong>${Math.floor(n)}</strong></p>`

    res.innerHTML += `<p>Ceil (para cima): <strong>${Math.ceil(n)}</strong></p>`
}
