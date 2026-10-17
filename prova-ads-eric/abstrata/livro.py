from item_acervo import ItemAcervo
class Livro(ItemAcervo):
    def __init__(self, titulo, ano, autor, editora):
        super().__init__(titulo, ano)
        self.autor = autor
        self.editora = editora

    def ficha(self):
        return f"{self.titulo} ({self.ano}) - {self.autor.nome} - {self.editora.nome}"
    
    def prazo_de_emprestimo(self):
        return 14
