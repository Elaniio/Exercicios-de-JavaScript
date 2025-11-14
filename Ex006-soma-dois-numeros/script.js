function somar() {
  let n1 = Number(prompt('Digite o primeiro número:'))
  let n2 = Number(prompt('Digite o segundo número:'))

let soma = n1 + n2

let res = document.getElementById('resultado')

res.innerHTML = `<p>A soma entre <strong>${n1}</strong> e <strong>${n2}</strong> é <strong>${soma}</strong>.</p>`
}
