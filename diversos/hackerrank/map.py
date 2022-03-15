precos = [1000, 1500, 1250, 2500]

def adicionar_imposto(preco):
  return preco * 1.1

precos_com_imposto = []

for preco in precos:
  precos_com_imposto.append(adicionar_imposto(preco))

print(precos_com_imposto)

precos_com_imposto2 = list(map(adicionar_imposto, precos))

print(precos_com_imposto2)

  