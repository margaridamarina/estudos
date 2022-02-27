from abc import ABCMeta, abstractmethod
class Book(object, metaclass=ABCMeta):
  def __init__(self, title, author):
    self.title=title
    self.author=author
  @abstractmethod
  def display(): pass

class MyBook(Book):
  def __init__(self, title, author, price):
    Book.__init__(self, title, author)
    self.price=price
  
  def display(self):
    print('Título: ' + self.title)
    print('Autor: ' + self.author)
    print('Preço: ' + str(self.price))


title=input('Título: ')
author=input('Autor: ')
price=int(input('Preço: '))
new_novel=MyBook(title, author, price)
new_novel.display()

