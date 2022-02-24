#In this HackerRank Day 10 Binary Numbers 30 days of code problem set, we need to develop a program that can accept integer as an input and then convert it into a binary number and then into in base 10 integer. we need to print the base 10 integer that denotes the maximum number of consecutive 1's in the binary representation of the input.

import sys

n = int(input().strip())

print("{0:b}".format(n))

current_consecutive_1s = 0
max_consecutive_1s = 0

while n > 0:
  resto = n % 2
  if resto == 1:
    current_consecutive_1s += 1
    if current_consecutive_1s > max_consecutive_1s:
      max_consecutive_1s = current_consecutive_1s
  else:
    current_consecutive_1s = 0
  n = n // 2

print(max_consecutive_1s)