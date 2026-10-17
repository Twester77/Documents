from item_acervo import ItemAcervo

class DVD(ItemAcervo):
    def __init__(self, titulo, ano, duracao):
        super().__init__(titulo, ano)
        self.duracao = duracao
        
    def prazo_de_emprestimo(self):
        return 2
    
    def ficha(self):
        return f"{self.titulo} - ({self.ano}) - {self.duracao} min"
    