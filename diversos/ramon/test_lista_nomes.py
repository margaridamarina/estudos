from unittest import TestCase
from lista_nomes import get_aggregated_dict, str_nomes

class TestLastnames(TestCase):
  def test_lastnames(self):
    expected_info = {'Caetano': ['João Miguel', 'Miguel', 'Davi', 'Isabella'], 'Silva': ['Enzo Gabriel', 'Heloísa', 'Lorena', 'Lucas'], 'Miranda': ['Maria Clara', 'Maria Cecília', 'Arthur', 'Pedro'], 'Melo': ['Maria Júlia', 'Samuel', 'Sophia', 'Júlia'], 'Alves': ['Maria Eduarda', 'Gabriel', 'Bernardo', 'Lorenzo', 'Cecília'], 'Moraes': ['Heitor', 'Theo', 'Laura', 'Gael', 'Valentina', 'Manuela'], 'Pereira': ['Helena', 'Alice', 'Benício']}

    self.assertEqual(expected_info, get_aggregated_dict(str_nomes))