from re import I
import sys

n = int(input().strip())

for i in range(1,11):
  produto = n * i 
  print(f'{n} x {i} = {produto}')