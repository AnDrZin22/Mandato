
function gerarMandado() {
    // Pegando os valores dos inputs
    const nome = document.getElementById("nome").value.trim();
    const idade = document.getElementById("idade").value.trim();
    const crime = document.getElementById("crime").value.trim();
    const data = document.getElementById("data").value;

    // Verificando se todos os campos foram preenchidos
    if (!nome || !idade || !crime || !data) {
        document.getElementById("mensagem").textContent = "Por favor, preencha todos os campos.";
        document.getElementById("mensagem").classList.add("erro");
        document.getElementById("mandado").style.display = "none";
        return;
    }

    // Verificando se a idade é um número válido e dentro de uma faixa razoável
    if (isNaN(idade) || idade <= 0 || idade > 120) {
        document.getElementById("mensagem").textContent = "Por favor, insira uma idade válida.";
        document.getElementById("mensagem").classList.add("erro");
        document.getElementById("mandado").style.display = "none";
        return;
    }

    // Formatando a data para o padrão DD/MM/YYYY
    const dataObj = new Date(data);
    const dataFormatada = dataObj.toLocaleDateString('pt-BR');

    // Gerando o texto do mandado
    const mandadoTexto = `
        <p><strong>Mandado de Prisão</strong></p>
        <p>Por meio deste, fica determinado que o acusado <strong>${nome}</strong>, 
        de ${idade} anos de idade, deverá ser preso em razão da acusação de <strong>${crime}</strong>.</p>
        <p>O mandado foi emitido no dia <strong>${dataFormatada}</strong>.</p>
        <p>Assinado: Autoridade competente</p>
    `;

    // Exibindo o mandado e limpando mensagens anteriores
    document.getElementById("mandadoTexto").innerHTML = mandadoTexto;
    document.getElementById("mandado").style.display = "block";
    document.getElementById("mensagem").textContent = "Mandado gerado com sucesso!";
    document.getElementById("mensagem").classList.remove("erro");
    document.getElementById("mensagem").classList.add("sucesso");
}
