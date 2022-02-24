#we have two classes, Person and Student. where the Person is the base class and the Student is the derived class. we need to inherit all the data from Person class and use them in Student class.
class Person:
  def __init__(self, firstName, lastName, idNum, scores):
    self.firsName = firstName
    self.lastName = lastName
    self.idNum = idNum
  def printPerson(self):
    print("Name:", self.lastName + ",", self.firsName)
    print("ID:", self.idNum)

class Student(Person):
  def __init__(self, firstName, lastName, idNum, scores):
    Person.__init__(self, firstName, lastName, idNum, scores)
    self.scores = scores
  def calculate(self):
    sum = 0
    for score in scores:
      sum += score
    average = sum/len(scores)
    if average < 40:
      return 'T'
    elif average < 55:
      return 'D'
    elif average < 70:
      return 'P'
    elif average < 80:
      return 'A'
    elif average < 90:
      return 'E'
    else:
      return 'O'  

line = input().split()
firstName = line[0]
lastName = line[1]
idNum = line[2]
scores = int(input())
s = Student(firstName, lastName, idNum, scores)
s.printPerson()
print("Grade:", s.calculate())