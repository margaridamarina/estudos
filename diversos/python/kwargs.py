def kwarg(**dados):
  for i in dados:
    print(dados)
    print(i)
    print(dados[i])

kwarg(numero = 1, teste = 'a')

