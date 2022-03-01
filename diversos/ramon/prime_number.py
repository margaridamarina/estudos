# printar todos os numeros primos entre dois numeros
def PrimosIntervalo(n):
# Se é divisivel apenas por 1 e ele mesmo, o número é primo.
  if n == 1:
    return str('Não é primo!')
  
  for d in range(2, n):
# Se nenhum outro resto for zero, o número é primo.
    if n % d == 0: 
      return str('Não é primo!')
  return str('É primo!')

num_minimo = int(input('Números primos a partir de: '))
num_maximo = int(input('Números primos até: '))

for num in range(num_minimo, num_maximo):
  print(num, PrimosIntervalo(num))


# 1 / 1 = 1 % 0
# 2 / 1 = 2 % 0  2 / 2 = 1 % 0
# 3 / 1 = 3 % 0  3 / 2 = 1 % 1  3 / 3 = 1 % 0
# 4 / 1 = 4 % 0  4 / 2 = 2 % 0  4 / 3 = 1 % 1  4 / 4 = 1 % 0
# 7 / 1 = 7 % 0  7 / 2 = 3 % 1  7 / 3 = 2 % 1  7 / 4 = 1 % 3  7 / 5 = 1 % 2
# 7 / 6 = 1 % 1  7 / 7 = 1 % 0


