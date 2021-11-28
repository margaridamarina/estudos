nome = str(input('Digite seu nome completo: ')).strip()
nome1 = nome.split()
print('Muito prazer em te conhecer!')
print(f'Seu primeiro nome é {nome1[0]}')
#print(f'Seu último nome é {nome1[len(nome1)-1]}')
print(f'Seu último nome é {nome1[-1]}')

