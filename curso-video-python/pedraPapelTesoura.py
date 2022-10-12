print('''Suas opções:
[ a ] PEDRA
[ b ] PAPEL 
[ c ] TESOURA''')
a = str('PEDRA')
b = str('PAPEL')
c = str('TESOURA')
jogada = str(input('Qual é sua jogada? '))
from time import sleep
print('JO')
sleep(1)
print('KEN')
sleep(1)
print('PO!!!')
sleep(1)
import random
lista = [a, b, c]
escolhido = random.choice(lista)

if jogada == 'a':
    jogada = 'PEDRA'
elif jogada == 'b':
    jogada = 'PAPEL'
elif jogada == 'c':
    jogada = 'TESOURA'

print('-=-' * 10)
print(f'O computador jogou {escolhido}')
print(f'O jogador jogou {jogada}')
print('-=-' * 10)

if jogada == c and escolhido == b:
    print('JOGADOR VENCE')
elif jogada == c and escolhido == a:
    print('COMPUTADOR VENCE')
elif jogada == a and escolhido == b:
    print('COMPUTADOR VENCE')
elif jogada == a and escolhido == c:
    print('JOGADOR VENCE')
elif jogada == b and escolhido == a:
    print('JOGADOR VENCE')
elif jogada == b and escolhido == c:
    print('COMPUTADOR VENCE')
elif jogada == escolhido:
    print('EMPATE')
else:
    print('OPÇÃO INVÁLIDA')