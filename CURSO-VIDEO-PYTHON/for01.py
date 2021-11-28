soma = 0
cont = 0
for c in range(1,501):
    if c % 2 == 1 and c % 3 == 0:
        print(c, end=' ')
        cont += 1
        soma += c

print(f'\nA soma de todos os {cont} valores é de {soma}')
