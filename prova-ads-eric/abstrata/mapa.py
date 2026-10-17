from item_acervo import ItemAcervo

class Mapa(ItemAcervo):
    def __init__(self, titulo, ano, escala):
        super().__init__(titulo, ano)
        self.duracao = escala
        
    def prazo_de_emprestimo(self):
        return 7
    def ficha(self):
        return f"{self.titulo} - ({self.ano}) - {self.escala} min"
    