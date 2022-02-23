lst = [1, 2, 3, 4, 4, 6, 7, 3, 4, 5, 2, 7]

def my_function(x):
  return list(dict.fromkeys(x))

mylist = my_function(lst)

print(mylist)