import sys
n = int(input())
arr = [int(arr_temp) for arr_temp in input().strip().split(' ')]

reversed_array = []
for i in range(n):
  reversed_array.append(arr[n-i-1])

output_string = ''
for i in range(len(reversed_array)):
  output_string += str(reversed_array[i]) + ' '

print(output_string)