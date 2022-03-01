#printar soma entre dois numeros
def somarIntervalo(a,b):
  soma = 0
  for e in range(a,b+1):
    soma = soma + e
  return soma
print(somarIntervalo(2,4))