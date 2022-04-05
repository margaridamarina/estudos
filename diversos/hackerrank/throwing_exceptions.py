class Calculator:
  def power(self, n, p):
    if n > 0 and p > 0:
      return pow(n, p)
    else:
      raise Exception("n and p should be non-negative!")

mycalculator = Calculator()
T = int(input())
for i in range(T):
  n,p = map(int, input().split())
  try:
    answer=mycalculator.power(n,p)
    print(answer)
  except Exception as e:
    print(e)
