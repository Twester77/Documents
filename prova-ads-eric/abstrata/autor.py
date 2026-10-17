class Autor:
    def __init__(self, nome, nacionalidade, ano_nascimento):
        self.nome = nome
        self.nacionalidade = nacionalidade
        self.ano_nascimento = ano_nascimento

    def apresentacao(self):
        return f"{self.nome} ({self.nacionalidade}, {self.ano_nascimento})"
