function calcularConta() {
  const valorConta = parseFloat(document.getElementById("valorConta").value);
  const numPessoas = parseInt(document.getElementById("numPessoas").value);
  const pagamento = document.getElementById("pagamento").value;
  const resultado = document.getElementById("resultado");

  resultado.style.display = "none";
  resultado.classList.remove("sucesso", "erro");

  if (isNaN(valorConta) || isNaN(numPessoas) || numPessoas <= 0 || !pagamento) {
    resultado.innerHTML = "Por favor, preencha todos os campos corretamente.";
    resultado.classList.add("erro");
    resultado.style.display = "block";
    return;
  }

  let desconto = 0;
  if (pagamento === "pix" || pagamento === "dinheiro") {
    desconto = valorConta * 0.10;
  }

  const valorFinal = valorConta - desconto;
  const valorPorPessoa = (valorFinal / numPessoas).toFixed(2);

  resultado.innerHTML = `
    Valor total com desconto: R$ ${valorFinal.toFixed(2)}<br>
    Cada pessoa deve pagar: <strong>R$ ${valorPorPessoa}</strong>
  `;
  resultado.classList.add("sucesso");
  resultado.style.display = "block";
}
