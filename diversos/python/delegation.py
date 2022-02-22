class MyClass(object):
  def sayhi(self):
    print('Hey, I am back')
  def whoami(self):
    print('I am the main class')

class NewClass(object):
  def __init__(self, obj):
    self.main = obj
  def welcome(self):
    self.main.sayhi()

m = MyClass()
n = NewClass(m)
m.sayhi()
n.welcome()
n.main.sayhi()
n.main.whoami()
