from item_acervo import ItemAcervo

class Revista(ItemAcervo):
    def __init__(self, titulo, ano, edicao):
        super().__init__(titulo, ano)
        self.edicao = edicao
        
        
    def prazo_de_emprestimo(self):
     return 0

    def ficha(self):
     return f"{self.titulo} - ({self.ano}) - edicao {self.edicao} min"
    