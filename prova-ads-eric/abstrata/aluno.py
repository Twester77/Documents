class Aluno:
    def __init__(self, ra, nome, telefone):
        self.ra = ra
        self.nome = nome
        self.telefone = telefone

    def primeiro_nome(self):
        return self.nome.split()[0]
