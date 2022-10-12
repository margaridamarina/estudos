from math import sqrt
cco = float(input('Comprimento do cateto oposto: '))
cca = float(input('Comprimento do cateto adjacente: '))
h = sqrt(cco**2 + cca**2)
print(f'A hipotenusa vai medir {h:.2f}')
