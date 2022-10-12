print('\033[35m-=\033[m' * 20)
print ('\033[35mAnalisador de triângulos\033[m')
print('\033[35m-=\033[m' * 20)
r1 = float(input('Primeiro segmento: '))
r2 = float(input('Segundo segmento: '))
r3 = float(input('Terceiro segmento: '))
if r1 < r2+r3 and r2 < r1+r3 and r3 < r2+r1:
    print('Os segmentos acima PODEM formar triângulo!')
else:
    print('Os segmentos acima NÃO PODEM formar triângulo!')