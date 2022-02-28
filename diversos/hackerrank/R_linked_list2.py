# int numero = 8;
# char, numero, bool, array

dado_input = "1 3 5 7 9 13"

limit_ficticio = 5
dado_lista = dado_input.split(" ")[0:limit_ficticio]
# print(dado_lista)

dados_lista_numero = [] # E necessario dizer quantos items vão exister na lista

for n in dado_lista:
  dados_lista_numero.append(int(n))

# print(dados_lista_numero)













## Linked List
# dados_lista_numero


class Node:
  value = None

  def _init_(self, value):
    self.next_node = None
    self.value = value
  
  def _repr_(self):
    return f'<Nó: val: {self.value} prox: {self.next_node} />'

custo = 0
class LinkedList:
  initial_node = None
  last_node = None

  def get_last_node(self):
    return self.last_node
    # current_node = self.initial_node
    # while current_node.next_node != None:
    #   custo = custo + 1
    #   current_node = current_node.next_node
    # return current_node

  def add(self, node = None):
    if self.initial_node is None:
      self.initial_node = node
      self.last_node = node 
    else:
      self.last_node.next_node = node
    # else:
    #   last_node = self.get_last_node()
    #   last_node.next_node = node

linked = LinkedList()

for n in range(0, 91):
  linked.add(Node(n))

# O ultimo item dela
print('ultimo', linked.initial_node)

# Quantos items ela tem
current_node = linked.initial_node
print('initial', current_node)

# count = 0
# while current_node.next_node != None:
#   current_node = current_node.next_node
#   custo = custo + 1
#   count = count + 1
# print(count)

print(f"custo: {custo} e$talecas")
print(linked.last_node)
linked.last_node.next_node = Node(333)

print(linked.initial_node)