numero = int(input('Digite um número inteiro: '))
print('''Escolha as bases para conversão:
[ 1 ] converter para BINÁRIO
[ 2 ] converter para OCTAL
[ 3 ] converter para HEXADECIMAL''')
opcao = int(input('Sua opção é: '))
if opcao == 1:
    print(f'{numero} convertido para BINÁRIO é igual a {bin(numero)}')
elif opcao == 2:
    print(f'{numero} convertido para OCTAL é igual a {oct(numero)}')
elif opcao ==3:
    print(f'{numero} convertido para HEXADECIMAL é igual a {hex(numero)}')
else:
    print('Opção inválida. Tente novamente!')


