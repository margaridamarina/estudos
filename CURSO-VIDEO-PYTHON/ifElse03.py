valor = float(input('Valor da casa: R$ '))
salário = float(input('Salário do comprador: R$ '))
anos = int(input('Quantos anos de financiamento? '))
parcelamensal =  valor / (anos * 12)
print(f'Para pagar uma casa de R$ {valor:.2f}, em {anos} anos, a prestação será de {parcelamensal}.')
if parcelamensal <= 0.3 * salário:
    print('Empréstimo CONCEDIDO!')
else:
    print('Empréstimo NEGADO!')