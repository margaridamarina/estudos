str_nomes= """
João Miguel Caetano
Enzo Gabriel Silva
Maria Clara Miranda
Maria Júlia Melo
Maria Eduarda Alves
Maria Cecília Miranda
Miguel Caetano
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
Isabella Caetano
"""

def get_names_as_list(input_strig):
    complete_list = input_strig.split('\n')
    filtred_list = []
    for name in complete_list:
        if name.strip() != "":
            filtred_list.append(name)
    return filtred_list

names_list = get_names_as_list(str_nomes)

aggregated_dict = {}

for name_as_string in names_list:
    names = name_as_string.split(" ")
    first_name_list = []
    
    for name_index in range(len(names) - 1):
        name = names[name_index]
        first_name_list.append(name)

    first_name = " ".join(first_name_list)
    last_name = names[-1]
    
    value_already_exists = aggregated_dict.get(last_name)
    if value_already_exists:
        aggregated_dict[last_name].append(first_name)
    else:
        aggregated_dict[last_name] = [first_name]

# print(aggregated_dict)
for k,v in aggregated_dict.items():
    print(f'[{k}]: {v}')