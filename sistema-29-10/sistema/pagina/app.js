// o endereço da API que está rodando no VS Code
const API = "http://127.0.0.1:8000";

// async: dentro dela dá para esperar a resposta com await
async function listarLivros() {
    // fetch faz o pedido GET, como a barra de endereço
    const resposta = await fetch(API + "/livros");
    // .json() lê o corpo da resposta: o json.loads do encontro 18
    const livros = await resposta.json();

    const lista = document.getElementById("lista");
    // apaga a lista de antes, senão cada clique repete os livros
    lista.innerHTML = "";
    // o "for livro in livros" do Python
    for (const livro of livros) {
        const item = document.createElement("li");
        // a crase com ${ } é o f-string do Python
        item.textContent = `${livro.id} - ${livro.titulo} (${livro.ano})`;
        lista.appendChild(item);
    }
}

async function buscarLivro() {
    // .value é o que está escrito no campo
    const codigo = document.getElementById("codigo").value;
    const resultado = document.getElementById("resultado");

    // o código vai no endereço, como o CEP ia no ViaCEP
    const resposta = await fetch(API + "/livros/" + codigo);
    const livro = await resposta.json();

    // ok é true só quando o status começa com 2
    if (!resposta.ok) {
        // o detail traz a mensagem que a API escreveu
        resultado.textContent = livro.detail;
        return;
    }
    resultado.textContent = `${livro.titulo} - ${livro.autor} (${livro.ano})`;
}

async function cadastrarLivro() {
    const campoTitulo = document.getElementById("titulo");
    const campoAutor = document.getElementById("autor");
    const campoAno = document.getElementById("ano");
    const mensagem = document.getElementById("mensagem");

    // o mesmo JSON que você escrevia no /docs, montado a partir dos campos
    const novo = {
        titulo: campoTitulo.value,
        autor: campoAutor.value,
        // o campo devolve texto; a API espera número
        ano: Number(campoAno.value),
    };

    const resposta = await fetch(API + "/livros", {
        // sem method, o fetch faz GET
        method: "POST",
        // avisa a API que o corpo é JSON
        headers: { "Content-Type": "application/json" },
        // JSON.stringify: o objeto vira texto JSON (o json.dumps do Python)
        body: JSON.stringify(novo),
    });
    const livro = await resposta.json();

    if (!resposta.ok) {
        // 400: a mensagem que o domínio escreveu chega até a página
        mensagem.textContent = livro.detail;
        return;
    }
    mensagem.textContent = `Cadastrado: ${livro.titulo} (código ${livro.id})`;
    // limpa os campos para o próximo
    campoTitulo.value = "";
    campoAutor.value = "";
    campoAno.value = "";
    // a lista se atualiza sozinha, sem clicar em Listar
    listarLivros();
}

async function excluirLivro() {
    const codigo = document.getElementById("codigo-excluir").value;
    const mensagem = document.getElementById("mensagem-excluir");

    // o código vai no endereço, como na busca
    // DELETE não leva corpo nem cabeçalho
    const resposta = await fetch(API + "/livros/" + codigo, {
        method: "DELETE",
    });

    // 204 é "feito, e não tenho nada para mostrar": não há corpo para ler
    if (resposta.ok) {
        mensagem.textContent = `Excluído o livro de código ${codigo}`;
        listarLivros();
        return;
    }
    // só o erro traz corpo: o detail da API
    const erro = await resposta.json();
    mensagem.textContent = erro.detail;
}

async function alterarLivro() {
    const codigo = document.getElementById("codigo-alterar").value;
    const campoTitulo = document.getElementById("novo-titulo");
    const campoAutor = document.getElementById("novo-autor");
    const campoAno = document.getElementById("novo-ano");
    const mensagem = document.getElementById("mensagem-alterar");

    // o mesmo objeto do cadastro: a API espera as três chaves
    const dados = {
        titulo: campoTitulo.value,
        autor: campoAutor.value,
        ano: Number(campoAno.value),
    };

    // PUT: o corpo do POST, no endereço da busca
    const resposta = await fetch(API + "/livros/" + codigo, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
    });
    const livro = await resposta.json();

    // 404 (código que não existe) ou 400 (o domínio recusou): o detail
    if (!resposta.ok) {
        mensagem.textContent = livro.detail;
        return;
    }
    mensagem.textContent = `Alterado: ${livro.titulo} (código ${livro.id})`;
    listarLivros();
}

// como o command= do Tkinter: o clique chama a função
const botaoListar = document.getElementById("botao-listar");
botaoListar.addEventListener("click", listarLivros);
const botaoBuscar = document.getElementById("botao-buscar");
botaoBuscar.addEventListener("click", buscarLivro);
const botaoCadastrar = document.getElementById("botao-cadastrar");
botaoCadastrar.addEventListener("click", cadastrarLivro);
const botaoExcluir = document.getElementById("botao-excluir");
botaoExcluir.addEventListener("click", excluirLivro);
const botaoAlterar = document.getElementById("botao-alterar");
botaoAlterar.addEventListener("click", alterarLivro);
