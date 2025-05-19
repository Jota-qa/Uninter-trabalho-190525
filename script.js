document.getElementById('mensagemBtn').addEventListener('click', function() {
    const mensagens = [
        "Você é capaz de coisas incríveis! Não há bug que te segure.",
        "Persista, todo esforço vale a pena! Sua dedicação é um feature que funciona perfeitamente.",
        "A jornada de mil milhas começa com um único passo. Dê o primeiro, e que seu test case seja de sucesso!",
        "Seja a mudança que você quer ver no mundo. Faça um report de impacto!"
    ];
    
    const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
    document.getElementById('mensagem').textContent = mensagemAleatoria;
});

document.getElementById('gerarOS').addEventListener('click', function() {
    const vendedor = document.getElementById('vendedor').value;
    const cliente = document.getElementById('cliente').value;
    const servico = document.getElementById('servico').value;
    const valor = parseFloat(document.getElementById('valor').value);
    const parcelas = parseInt(document.getElementById('parcelas').value);
    
    if (!vendedor || !cliente || !servico || isNaN(valor)) {
        alert("Por favor, preencha todos os campos!");
        return;
    }
    
    const valorParcela = valor / parcelas;
    
    let osText = `
        <h3>Ordem de Serviço Gerada</h3>
        <p><strong>Vendedor:</strong> ${vendedor}</p>
        <p><strong>Cliente:</strong> ${cliente}</p>
        <p><strong>Serviço:</strong> ${document.getElementById('servico').options[document.getElementById('servico').selectedIndex].text}</p>
        <p><strong>Valor Total:</strong> R$ ${valor.toFixed(2)}</p>
        <p><strong>Forma de Pagamento:</strong> ${parcelas === 1 ? 'À vista' : parcelas + ' parcelas de R$ ' + valorParcela.toFixed(2)}</p>
        <p><strong>Data:</strong> ${new Date().toLocaleDateString()}</p>
    `;
    
    document.getElementById('osResult').innerHTML = osText;
    document.getElementById('osResult').style.display = 'block';
});