from autor import Autor
from editora import Editora
from livro import Livro
from dvd import DVD
from revista import Revista
from aluno import Aluno
from emprestimo import Emprestimo
from mapa import Mapa

machado = Autor("Machado de Assis", "brasileiro", 1839)
companhia = Editora("Companhia das Letras", "Sao Paulo")
casmurro = Livro("Dom Casmurro", 1899, machado, companhia)
ana = Aluno("2026001", "Ana Souza", "17 99999-0000")
emp = Emprestimo(ana, casmurro, "11/09/2026")
brasil = Mapa("Mapa do Brasil", 2020,"1:5.000.000") 
print(emp.resumo())
emp.devolver()
print(emp.resumo())

central = DVD("Central do Brasil", 1998, 113)
piaui = Revista("Piauí", 2024, 200)

acervo = [casmurro, central, piaui, brasil]
for item in acervo:
    print(item.titulo, "-", item.prazo_de_emprestimo(), "dias")

    
emp2 = Emprestimo(ana, central, "09/10/2026")
print(emp2.resumo())

# Obs tá faltando alguma coisa aqui
for item in acervo:
    print(item.ficha(), "|", item.prazo_de_emprestimo(), "dias")

try:
   emp3= Emprestimo(ana, piaui, "09/10/2026")
   print(emp3.resumo())
except ValueError as erro:
    print("barrou:", erro)