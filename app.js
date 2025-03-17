let amigosInserir = [];
let lista = document.getElementById('listaAmigos');

// Função para adicionar amigos
function adicionarAmigo() {
    let nome = document.querySelector('input').value;

    if (nome == '') {
        alert("Insira ao menos dois nomes para sortear!");
        return;
    } else {
        amigosInserir.push(nome);
        limparCampo();
    }
    atualizarLista();
    console.log('Nome capturado: ', nome);
    return nome;
    
}

function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}

function atualizarLista() {
    lista.innerHTML = ''; 
    amigosInserir.forEach(amigo => {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}


function sortearAmigo() {
    if (amigosInserir.length === 0) {
        alert('Adicione pelo menos um amigo para realizar o sorteio!');
        return;
    }

    let amigoSorteado = amigosInserir[Math.floor(Math.random() * amigosInserir.length)];
    resultado.innerHTML = `<li>O amigo secreto é: ${amigoSorteado}</li>`;
}


function limparLista() {
    amigosInserir = [];
    atualizarLista();
    resultado.innerHTML = '';
}
