sexo = str(input('Informe seu sexo: [M/F] ')).strip().upper()
while sexo not in 'FfMm':
    sexo = str(input('Dados inválidos, por favor, informe seu sexo: ')).upper()
print(f'Sexo {sexo}  registrado com sucesso')