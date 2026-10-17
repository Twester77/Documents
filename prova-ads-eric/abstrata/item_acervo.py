from abc import ABC, abstractmethod

class ItemAcervo(ABC):
    def __init__(self, titulo, ano):
        self.titulo = titulo
        self.ano = ano

    def prazo_de_emprestimo(self):
        return 0
    
    @abstractmethod
    def prazo_de_emprestimo(self):
        pass
    
    @abstractmethod
    def ficha(self):
        pass