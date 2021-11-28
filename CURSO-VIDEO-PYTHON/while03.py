n1 = int(input('Primeiro valor: '))
n2 = int(input('Segundo valor: '))
jogador = 0
while jogador != 5:
    print('[ 1 ] somar')
    print('[ 2 ] multiplicar')
    print('[ 3 ] maior')
    print('[ 4 ] novos números')
    print('[ 5 ] sair do programa')
    jogador = int(input('>>>> Qual é a sua opção? '))
    if jogador == 1:
        soma = n1 + n2
        print(f'A soma de {n1} + {n2} é {soma}')
        print('=-=' * 10)
    elif jogador == 2:
        produto = n1 * n2
        print(f'O produto de {n1} * {n2} é {produto}')
        print('=-=' * 10)
    elif jogador == 3:
        if n1 > n2:
            maior = n1
        else:
            maior = n2
        print(f'Entre {n1} e {n2}, o maior é {maior}')
        print('=-=' * 10)
    elif jogador == 4:
        print('Informe os números novamente: ')
        n1 = int(input('Primeiro valor: '))
        n2 = int(input('Segundo valor: '))
        print('=-=' * 10)
    elif jogador == 5:
        print('Finalizando...')
        print('=-=' * 10)
    else:
        print('Opção inválida!')
        print('=-=' * 10)
print('Fim do programa! Volte sempre!')