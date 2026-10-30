const API = "http://127.0.0.1:8000";

// --- LISTAR LIVROS (GET) ---
async function listarLivros() {
    const resposta = await fetch(API + "/livros");
    const livros = await resposta.json();
    
    const lista = document.getElementById("lista");
    lista.innerHTML = ""; // Limpa a lista antes de preencher de novo

    for (const livro of livros) {
        const item = document.createElement("li");
        item.textContent = `${livro.id} - ${livro.titulo} (${livro.ano})`;
        lista.appendChild(item);
    }
}

// --- BUSCAR LIVRO (GET) ---
async function buscarLivro() {
    const codigo = document.getElementById("codigo").value;
    const resultado = document.getElementById("resultado");

    const resposta = await fetch(API + "/livros/" + codigo);
    const livro = await resposta.json();

    // Verifica se deu erro (404, 400 etc)
    if (!resposta.ok) {
        resultado.textContent = livro.detail;
        return;
    }

    resultado.textContent = `${livro.titulo} - ${livro.autor} (${livro.ano})`;
}

// --- CADASTRAR LIVRO (POST) ---
async function cadastrarLivro() {
    const campoTitulo = document.getElementById("titulo");
    const campoAutor = document.getElementById("autor");
    const campoAno = document.getElementById("ano");
    const mensagem = document.getElementById("mensagem");

    // Monta o objeto JSON
    const novo = {
        titulo: campoTitulo.value,
        autor: campoAutor.value,
        ano: Number(campoAno.value)
    };

    const resposta = await fetch(API + "/livros", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(novo)
    });

    const livro = await resposta.json();

    // Verifica se deu erro (400, 422 etc)
    if (!resposta.ok) {
        mensagem.textContent = livro.detail;
        return;
    }

    mensagem.textContent = `Cadastrado: ${livro.titulo} (código ${livro.id})`;
    
    // Limpa os campos
    campoTitulo.value = "";
    campoAutor.value = "";
    campoAno.value = "";

    // Atualiza a lista automaticamente
    listarLivros();
}

// --- AMARRANDO OS BOTÕES ---
const botaoListar = document.getElementById("botao-listar");
botaoListar.addEventListener("click", listarLivros);

const botaoBuscar = document.getElementById("botao-buscar");
botaoBuscar.addEventListener("click", buscarLivro);

const botaoCadastrar = document.getElementById("botao-cadastrar");
botaoCadastrar.addEventListener("click", cadastrarLivro);