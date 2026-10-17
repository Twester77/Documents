class Emprestimo:
    def __init__(self, aluno, livro, data):
        self.aluno = aluno
        self.livro = livro
        self.data = data
        self.devolvido = False
        
        if livro.prazo_de_emprestimo() == 0 :
            raise ValueError(f"{livro.titulo} não pode ser emprestado.")

    def resumo(self):
        situacao = "devolvido" if self.devolvido else "em aberto"
        return f"{self.aluno.primeiro_nome()} pegou {self.livro.titulo} em {self.data} [{situacao}]"

    def devolver(self):
        self.devolvido = True
