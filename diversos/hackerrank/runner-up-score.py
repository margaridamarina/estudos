arr = [5,6,6,2,1]

a = max(arr)

c = arr.count(a)

for i in range(c):
  arr.remove(a)

print(max(arr))