# Given a list of N numbers, use a single list comprehension to produce a new list that only contains those values that are:
# (a) even numbers, and
# (b) from elements in the original list that had even indices

# For example, if list[2] contains a value that is even, that value should be included in the new list, since it is also at an even index (i.e., 2) in the original list. However, if list[3] contains an even number, that number should not be included in the new list since it is at an odd index (i.e., 3) in the original list.

list = [ 1 , 3 , 5 , 8 , 10 , 13 , 18 , 36 , 78 ]

for x in list[::2]:
  if x%2 == 0:
    print(x)