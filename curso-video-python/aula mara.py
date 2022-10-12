from random import randint

valor_inicial = randint(0, 10)
soma =  valor_inicial

print(f'valor inicial {soma}')
n = int(input('Digite um número: '))
soma = soma + n
print(f'A soma dos números é {soma}')
m = int(input('Digite outro número: '))
soma = soma + m
print(f'A soma dos números é {soma}')
o = int(input('Digite outro número: '))
soma = soma + o
print(f'A soma dos números é {soma} e deveria ser {valor_inicial + n + o + m}')