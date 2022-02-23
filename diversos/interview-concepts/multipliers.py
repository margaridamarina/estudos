# def multipliers():
#   return [lambda x : i * x for i in range(4)]
    
# print([m(2) for m in multipliers()])

# print('-'*30)

# def multipliers():
#   return (lambda x : i * x for i in range(4))

# print([m(2) for m in multipliers()])

# print('-'*30)

a = [4,2,3]
print(a)

b = [x*2 for x in a]
print(b)

c = (x*2 for x in a)
print(list(c))

