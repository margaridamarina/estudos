
def singleNumber(nums: List[int])-> int:
  freq = {}
  for num in nums: 
    if num not in freq:
      freq[num] = 1
    else:
      freq[num] += 1
  for num in nums:
    if freq[num] == 1:
      return num
lista = [2,2,1]
singleNumber(lista)