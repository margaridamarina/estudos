dicionario = {"name":"margarida", "idade":25}

lista = ["margarida", 25]
lista1 = ["ramon", 27]

print(lista)
print(lista1)


for a in lista:
  print(a)

for a in range(len(lista)):
  print(lista[a])

lista.append("rosa")
print(lista)

def estudar_python(informacao):#a variavel informacao esta sendo definida dentro do escopo da funcao
  print(informacao[1])
estudar_python(lista)
estudar_python(lista1)
