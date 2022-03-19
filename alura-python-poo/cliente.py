class Cliente:
  def __init__(self, nome):
    self.__nome = nome

  # def get_nome(self):
  #   return self.nome.title()

  @property
  def nome(self):
    print("chamando @property nome()")
    return self.__nome.title()
  
  @nome.setter
  def nome(self, nome):
    print("chamando setter nome()")
    self.__nome = nome

cliente = Cliente("Marco")
# print(cliente.nome)
# cliente.nome = "Nico"
# print(cliente.nome)

# cliente.nome = "nico"
# print(cliente.get_nome())

cliente = Cliente("nico")
cliente.nome = "marco"
print(cliente.nome) #por ser uma property nao precisa do ()
