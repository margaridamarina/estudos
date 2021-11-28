distância = int(input('Qual a distância da viagem? '))
if distância <= 200:
    print(f'O custo da sua passagem é de \033[35m R$ {distância * 0.50:.2f} \033[m')
else:
    print (f'O custo da sua passagem é de R$ {distância * 0.45:.2f}')