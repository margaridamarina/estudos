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
# print(convert_string_to_list())

def convert_list_to_dict():
  li = convert_string_to_list()
  res_dict = {li[i]: li[i+1] for i in range(0, len(li), 2)}
  return res_dict
dicionario = convert_list_to_dict()
# print(dicionario)

def group_lastnames():
    flipped = {}  
    for key, value in dicionario.items():
        if value not in flipped:
            flipped[value] = [key]
        else:
            flipped[value].append(key)
    return flipped

if __name__ == "__main__":
    print(
        group_lastnames()
    )