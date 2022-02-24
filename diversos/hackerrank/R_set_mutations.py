# The first line contains the number of elements in set .
# The second line contains the space separated list of elements in set .
# The third line contains integer , the number of other sets.
# The next  lines are divided into  parts containing two lines each:
  # The first line of each part contains the space separated entries of the operation name and the length of the other set.
  # The second line of each part contains space separated list of elements in the other set.

len_set = int(input())

storage = set(map(int, input().split()))

op_len = int(input())

for i in range(op_len):
    operation = input().split()
    if operation[0] == 'intersection_update':
        temp_storage = set(map(int, input().split()))
        storage.intersection_update(temp_storage)
    elif operation[0] == 'update':
        temp_storage = set(map(int, input().split()))
        storage.update(temp_storage)
    elif operation[0] == 'symmetric_difference_update':
        temp_storage = set(map(int, input().split()))
        storage.symmetric_difference_update(temp_storage)
    elif operation[0] == 'difference_update':
        temp_storage = set(map(int, input().split()))
        storage.difference_update(temp_storage)
    else :
        assert False

print(sum(storage))