from os import MFD_HUGE_512KB


dict = {}
l = list()

for i in range(int(input())):
  name = input()
  score = float(input())
  if score in dict:
    dict[score].append(name)
  else: 
    dict[score] = [name]
  if score not in l:
    l.append(score)
m = min(l)
l.remove(m)
m1 = min(l)
dict[m1].sort()
for i in dict[m1]:
  print(i)