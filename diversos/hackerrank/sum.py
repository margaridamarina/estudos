# a = [22,23,24]
# sum = a[0] + a[1] + a[2]

# a = []
# for n in range(1, 101):
#   a.append(n)
# print(sum(a))

soma = 0
for e in range(1, 101):
  soma = soma + e
print(soma)

# a = range(0, 5)
# print(a[2])

def somarIntervalo(a,b):
  soma = 0
  for e in range(a,b):
    soma = soma + e
  return soma
print(somarIntervalo(2,4))

#somar intervalo de dois numeros
#somar todos os numeros pares entre dois numeros
#printar todos os numeros primos entre dois numeros