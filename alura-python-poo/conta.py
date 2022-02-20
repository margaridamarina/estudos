class Conta: #receita do bolo
  def __init__(self, numero, titular, saldo, limite):
    print(f'Construindo objeto...',{self}) #self é a referência que sabe encontrar o objeto construído em memória.
    self.numero = numero
    self.titular = titular
    self.saldo = saldo
    self.limite = limite

  def extrato(self):
    print(f'Saldo de', {self.saldo}, ', do titular', {self.titular})

  def deposita(self, valor):
    self.saldo += valor

  def saca(self, valor):
    self.saldo -= valor

# conta = Conta() #essa referencia guardará esse endereço desse onjeto em memoria para saber onde encontrá-lo

conta = Conta(123, "Nico", 55.5, 1000)
conta2 = Conta(321, "Marco", 100, 1000)

print(conta) 
print(conta2)
print(conta.extrato())
print(conta2.extrato()) 
print(conta.deposita(15))
print(conta.extrato()) 
print(conta.saca(10)) 
print(conta.extrato()) 






