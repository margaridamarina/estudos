#we need to develop a program that can take a 2-dimensional integer array as input and then calculate the sum of every hourglass that present in that array.
#if we have an array of size 6x6 then there is 16 hourglass present in the array. so here in this problem, we need to print the hourglass sum that has a maximum value. and the input array is fixed that is a 6x6 or 2-dimensional array.

# import sys

# def _get_hourglass_sum(matrix, row, col):
#   sum = 0
#   sum += matrix[row-1][col-1]
#   sum += matrix[row-1][col]
#   sum += matrix[row-1][col+1]
#   sum += matrix[row][col]
#   sum += matrix[row+1][col-1]
#   sum += matrix[row+1][col]
#   sum += matrix[row+1][col+1]
#   return sum

# arr = []

# for arr_i in range(6):
#   arr_t = [int(arr_temp) for arr_temp in input().strip().split(' ')]
#   arr.append(arr_t)

# print(arr_t)

# print(arr)

# #we know the first and last row (index 0 and index n-1) cant have hourglasses
# #and the first and last colums also cant have hourglasses

# #our minimum possible value for Maxim is an hourglass of all negative nines which sums to -63

# max_hourglass_sum = -63
# for i in range (1,5):
#   for j in range(1,5):
#     current_hourglass_sum = _get_hourglass_sum(arr, i , j)
#     if current_hourglass_sum > max_hourglass_sum:
#       max_hourglass_sum = current_hourglass_sum

# print(max_hourglass_sum)
  
n = 6
m = []
for i in range(n):
    m.append(list(map(int, input().split()[:n])))
    
def sum_glass(m, i, j):
    """Assumes hour-glass is in bounds of m!"""
    return sum(m[i][j:j+3]) + m[i+1][j+1] + sum(m[i+2][j:j+3])

best = float("-inf")
for i in range(4):
    for j in range(4):
        s = sum_glass(m, i, j)
        if s > best:
            best = s
            
print(best)