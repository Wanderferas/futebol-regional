function darNota() {
    const nome = document.getElementById('nomeJogador').value;
    const nota = document.getElementById('notaJogador').value;

    if (nome === '' || nota === '') {
        alert("Preencha todos os campos!");
        return;
    }

    const lista = document.getElementById('listaAvaliacoes');
    const novaAvaliacao = document.createElement('p');
    novaAvaliacao.innerHTML = `⭐ <strong>${nome}:</strong> Nota ${nota}`;
    
    lista.appendChild(novaAvaliacao);

    // Limpar campos
    document.getElementById('nomeJogador').value = '';
    document.getElementById('notaJogador').value = '';
}