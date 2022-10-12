from random import randint
from time import sleep
computador = randint(0,5)
print('-=-' * 20)
jogador = int(input('Vou pensar em um número entre 0 e 5. Tente adivinhar: '))
print('-=-' * 20)
print('PROCESSANDO...')
sleep(1)
if jogador == computador:
    print('PARABÉNS! Você conseguiu me vencer!')
else:
    print(f'GANHEI! Eu pensei no número {computador} e não no {jogador}!')
