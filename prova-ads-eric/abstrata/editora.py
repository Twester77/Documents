class Editora:
    def __init__(self, nome, cidade):
        self.nome = nome
        self.cidade = cidade

    def etiqueta(self):
        return f"{self.nome} - {self.cidade}"
