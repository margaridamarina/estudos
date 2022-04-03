import math

def area(r):
  return math.pi * (r**2)

radii = [2, 5, 7.1, 0.3, 10]

areas = []

for r in radii:
  a = area(r)
  areas.append(a)

print(areas)

############

print(list(map(area, radii)))


