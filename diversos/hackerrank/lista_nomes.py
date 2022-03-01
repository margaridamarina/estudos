import re

str_nomes2 = """
João Miguel Caetano
Enzo Gabriel Silva
Maria Clara Miranda
Maria Júlia Melo
Maria Eduarda Alves
Maria Cecília Miranda
"""
str_nomes = """Miguel Caetano
Arthur Miranda
Heitor Moraes
Helena Pereira
Alice Pereira
Theo Moraes
Davi Caetano
Laura Moraes
Gabriel Alves
Gael Moraes
Bernardo Alves
Samuel Melo
Valentina Moraes
Heloísa Silva
Pedro Miranda
Lorenzo Alves
Sophia Melo
Lorena Silva
Lucas Silva
Manuela Moraes
Cecília Alves
Benício Pereira
Júlia Melo
Isabella Caetano"""

def convert_string_to_list():
    li = str_nomes.split()
    return li

# print(convert_string_to_list(str_nomes))

def convert_list_to_dict():
  li = convert_string_to_list()
  res_dict = {li[i]: li[i+1] for i in range(0, len(li), 2)}
  return res_dict

dicionario = convert_list_to_dict()
# print(dicionario)

flipped = {}  
for key, value in dicionario.items():
    if value not in flipped:
        flipped[value] = [key]
    else:
        flipped[value].append(key)
  
print("final_dictionary", str(flipped))
