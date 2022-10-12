salario = int(input('Qual é o seu salário hoje? R$ '))
if salario >= 1250:
    print(f'Seu novo salário será de R$ {salario * 1.1:.2f}!')
else:
    print(f'Seu novo salário será de R$ {salario * 1.15:.2f}!')