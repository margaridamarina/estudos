#RECURSION
# def fibonacci(n):
#   if n == 1:
#     return 1
#   elif n == 2 :
#     return 1
#   elif n > 2:
#     return fibonacci(n-1) + fibonacci(n-2)

# for n in range(1, 11):
#   print(n, ":", fibonacci(n))

#MEMORIZATION
# fibonacci_cache = {}

# def fibonacci(n):
#   #if we have cached the value, then return it
#   if n in fibonacci_cache:
#     return fibonacci_cache[n]

#   #compute the Nth term
#   if n == 1:
#     value = 1
#   elif n == 2 :
#     value = 1
#   elif n > 2:
#     value = fibonacci(n-1) + fibonacci(n-2)

#   #cache the value and the return it
#   fibonacci_cache[n] = value
#   return value

# for n in range(1, 101):
#   print(n, ":", fibonacci(n))

#CLEAN AND FAST
#Least Recently Used Cache
from functools import lru_cache

@lru_cache(maxsize = 1000)
def fibonacci(n):
  #Check that the input is a positive integer
  if type(n) != int:
    raise TypeError("n must be a positive int")
  if n < 1:
    raise ValueError("n must be a positive int")
  #compute the Nth term
  if n == 1:
    return 1
  elif n == 2 :
    return 1
  elif n > 2:
    return fibonacci(n-1) + fibonacci(n-2)

for n in range(1, 51):
  print(fibonacci(n))