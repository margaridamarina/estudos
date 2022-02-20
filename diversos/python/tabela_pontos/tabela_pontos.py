tabela_pontos = []
with open("planilha_tabela_pontos.csv", "r") as f:
  for line in f:
    tokens = line.split(';')
    person = tokens[0]
    point = float(tokens[1])
    tabela_pontos.append([person,point])

print(tabela_pontos)

for element in tabela_pontos:
  if element[0] == 'RAMON':
    print(element[1])

print("-"*30)

tabela_pontos = {}
with open("planilha_tabela_pontos.csv", "r") as f:
  for line in f:
    tokens = line.split(';')
    person = tokens[0]
    point = float(tokens[1])
    tabela_pontos[person] = point

print(tabela_pontos)

print(tabela_pontos["RAMON"])
  

 

