let nome = document.getElementById('nome')
let valor = document.getElementById('valor')
let imagem = document.getElementById('imagem')

function produtosAdicionar() {

    let nome = document.getElementById('nome').value;
    let valor = document.getElementById('valor').value;
    let imagem = document.getElementById('imagem').value;

    const lista = document.querySelector('.produtos__itens_lista');

    const novaLista = document.createElement('li');

    let nomeNovo = document.createElement('p');
    nomeNovo.className = 'produtos__itens_nome';
    nomeNovo.innerHTML = `${nome}`

    let valorNovo = document.createElement('p');
    valorNovo.className = 'produtos__itens_preco';    
    valorNovo.innerHTML = `$ ${valor} <button onclick="delet(event)" class="delete"><img src="assets/icon/lixeira.png" alt=""></button>`;

    let imagemNova = document.createElement('img');
    imagemNova.className = 'produtos__itens_img';
    imagemNova.src = `${imagem}`;   

    novaLista.appendChild(nomeNovo);
    novaLista.appendChild(valorNovo);
    novaLista.appendChild(imagemNova);

    lista.appendChild(novaLista);

    limparCampo()    
}

function limparCampo() {
    nome.value = '';
    valor.value = '';
    imagem.value = '';
}

function delet(event) {    
    let apagar = event.target.closest('li');
    apagar.remove();
}



