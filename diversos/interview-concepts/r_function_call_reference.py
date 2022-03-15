def function(a, b):
  a = 'value'
  b = b + 1
# a and b are local variables that are used to assign the new objects
  return a, b
# This is the function that is used to return the value stored in b

def function(a):
  a[0] = 'string'
  a[1] = a[1] + 1
# The ‘a’ array give reference to the mutable list and it changes the changes that are shared
  args = ['string', 10]
  func1(args)
  print(args[0], args[1])
#This prints the value stored in the array of ‘a’
function([3, 'a'])
#https://www.careerride.com/python-interview-questions.aspx