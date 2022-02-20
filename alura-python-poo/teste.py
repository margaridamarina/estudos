def cria_conta(numero, titular, saldo, limite):
  conta = {"numero": numero, "titular": titular, "saldo": saldo, "limite": limite}
  return conta

conta = cria_conta(123, "Nico", 55.0, 1000.0)

def deposita(conta, valor):
  conta["saldo"] += valor

def saca(conta, valor):
  conta["saldo"] -= valor

def extrato(conta):
  print(f'Saldo é {conta["saldo"]}')

deposita(conta, 15.0)
extrato(conta)

saca(conta, 20)
extrato(conta)

conta["saldo"] = conta["saldo"] + 100
extrato(conta)

conta2 = {"numero": 321, "saldo": 200}
deposita(conta2, 200)
extrato(conta2)