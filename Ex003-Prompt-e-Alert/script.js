function perguntarNome() {
  const nome = prompt("Qual é o seu nome?")
  if (!nome) {
    alert("Você não informou um nome.")
    return
  }
  alert(`Olá, ${nome}! Seja bem-vindo(a)!`)
}
