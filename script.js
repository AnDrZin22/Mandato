function gerarMandado() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const crime = document.getElementById("crime").value;
    const data = document.getElementById("data").value;

    if (!nome || !idade || !crime || !data) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const mandadoTexto = `
        <p><strong>Mandado de Prisão</strong></p>
        <p>Por meio deste, fica determinado que o acusado <strong>${nome}</strong>, 
        de ${idade} anos de idade, deverá ser preso em razão da acusação de <strong>${crime}</strong>.</p>
        <p>O mandado foi emitido no dia <strong>${data}</strong>.</p>
        <p>Assinado: Autoridade competente</p>
    `;

    document.getElementById("mandadoTexto").innerHTML = mandadoTexto;
    document.getElementById("mandado").style.display = "block";
}
