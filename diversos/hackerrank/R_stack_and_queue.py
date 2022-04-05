from collections import deque

class Solution:
  def __init__(self):
    self.stack = list()
    self.queue = deque()

  def pushCharacter(self, character):
    self.stack.append(character)

  def enqueueCharacter(self, character):
    self.queue.append(character)

  def popCharacter(self):
    return self.stack.pop()

  def dequeueCharacter(self):
    return self.queue.popleft()

s=input()
solution=Solution()

l=len(s)
for i in range(l):
  solution.pushCharacter(s[i])
  solution.enqueueCharacter(s[i])

isPalindrome=True

for i in range(l // 2):
  if solution.popCharacter() != solution.dequeueCharacter():
    isPalindrome=False
    break

if isPalindrome:
  print("The word -"+s+"- is a palindrome")
else:
  print("The word -"+s+"- is not a palindrome")

