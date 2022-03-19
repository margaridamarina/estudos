class Conta: #receita do bolo
  def __init__(self, numero, titular, saldo, limite):
    print(f'Construindo objeto...',{self}) #self é a referência que sabe encontrar o objeto construído em memória.
    self.__numero = numero
    self.__titular = titular
    self.__saldo = saldo
    self.__limite = limite

  def extrato(self):
    print(f'Saldo de {self.__saldo} do titular {self.__titular}')

  def deposita(self, valor):
    self.__saldo += valor

  def __pode_sacar(self, valor_a_sacar):
      valor_disponivel_a_sacar = self.__saldo + self.__limite
      return valor_a_sacar <= valor_disponivel_a_sacar

  def saca(self, valor):
    if(self.__pode_sacar(valor)):
      self.__saldo -= valor
    else:
      print(f'O valor {valor} passa o limite')
  # def transfere(self, valor, origem, destino):
  #   origem.saca(valor)
  #   destino.deposita(valor)

  def transfere(self, valor, destino):
    self.saca(valor)
    destino.deposita(valor)

  @property
  def saldo(self):
    return self.__saldo
 
  @property
  def titular(self):
    return self.__titular

  @property
  def limite(self):
    return self.__limite

  @limite.setter
  def limite(self, limite):
    self.__limite = limite

  # @property
  # def codigo_banco(self):
  #   return self.__codigo_banco

  @staticmethod
  def codigo_banco():
    return "001"

  @staticmethod
  def codigos_bancos():
    return {'BB': '001', 'Caixa':'104', 'Bradesco':'237'}


# conta = Conta() #essa referencia guardará esse endereço desse onjeto em memoria para saber onde encontrá-lo

conta = Conta(123, "Nico", 55.5, 1000)
conta2 = Conta(321, "Marco", 100, 1000)

# conta.extrato()
# conta.deposita(15)
# conta.extrato()
# conta.saca(10)

# conta2.transfere(10, conta)
# conta2.extrato()

# valor = 10
# conta2.saca(valor)
# conta.deposita(valor)
# conta.extrato()

# conta2.transfere(10, conta)
# conta2.extrato()

# print(conta.get_saldo())
# print(conta.get_titular())
# print(conta.get_limite())

# conta.set_limite(10000)
# print(conta.get_limite())

# print(conta.limite)
# conta.limite = 2000
# print(conta.limite)

# print(conta.saldo) 
# conta.saca(100)
# print(conta.saldo) 

# print(conta.codigo_banco)

# print(Conta.codigo_banco())

codigos = Conta.codigos_bancos()
print(codigos)
print(codigos['BB'])
print(codigos['Caixa'])
