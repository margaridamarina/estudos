
from random import randint

def gerar_numero_aleatorio():
  n = randint(1,5)
  print("funcao gerar numero foi chamada")
  return n

def dobra_numero_gerado(a):
  numerodobrado = a*2
  print("funcao dobrar numero foi chamada")
  return numerodobrado

n = gerar_numero_aleatorio()
numerodobrado = dobra_numero_gerado(n)

def printa_numero_dobrado(b, c):
  print("funcao printar numero dobrado foi chamada")
  print(f"Oi, {b} x 2 é igual a {c}")

printa_numero_dobrado(n, numerodobrado)
