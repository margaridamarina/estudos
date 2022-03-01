#printar todos os numeros pares entre dois numeros
def somarParesIntervalo(a,b):
  soma = 0
  for e in range(a,b+1):
    if e % 2 == 0:
      soma = soma + e
  return soma
print(somarParesIntervalo(6,8))
