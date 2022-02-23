def extendList(val, list=[]):
    list.append(val)
    return list

list1 = extendList(10)
list2 = extendList(123,[])
list3 = extendList('a')

print(list1)
print(list2)
print(list3)

print('-'*30)

def extendList(val, list=None): #é levada para as outras
  if list is None: #escopo da funcao, sendo resetada sempre
    list = []
  list.append(val)
  return list

list1 = extendList(10)
list2 = extendList(123,[])
list3 = extendList('a')

print(list1)
print(list2)
print(list3)





