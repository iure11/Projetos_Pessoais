function sortearTimes() {
    const jogadores = document.getElementById('jogadores').value.trim().split('\n');
    const cabecasDeChave = document.getElementById('cabecasDeChave').value.trim().split('\n');

    // Remover cabeças de chave da lista de jogadores
    cabecasDeChave.forEach(cabeca => {
        const index = jogadores.indexOf(cabeca);
        if (index > -1) {
            jogadores.splice(index, 1);
        }
    });

    // Embaralhar jogadores
    for (let i = jogadores.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [jogadores[i], jogadores[j]] = [jogadores[j], jogadores[i]];
    }

    // Distribuir jogadores nos times
    const times = [[cabecasDeChave[0]], [cabecasDeChave[1]], [cabecasDeChave[2]]];
    jogadores.forEach((jogador, index) => {
        times[index % 3].push(jogador);
    });

    // Exibir times
    exibirTime('time1', times[0]);
    exibirTime('time2', times[1]);
    exibirTime('time3', times[2]);
}

function exibirTime(elementoId, time) {
    const ul = document.getElementById(elementoId);
    ul.innerHTML = ''; // Limpar lista anterior
    time.forEach(jogador => {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(jogador));
        ul.appendChild(li);
    });
}
