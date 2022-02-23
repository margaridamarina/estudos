valor_pedido = int(input())
porcent_gorjeta = int(input())
porcent_imposto = int(input())

gorjeta = valor_pedido * porcent_imposto / 100
imposto = valor_pedido * porcent_imposto / 100

pedido = round(valor_pedido + gorjeta + imposto)

print(f'O pedido total foi no valor de R$ {pedido} reais.')