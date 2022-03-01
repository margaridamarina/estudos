from unittest import TestCase
from lista_nomes import group_lastnames

class TestLastnames(TestCase):
  def test_lastnames(self):
    expected_info = {'Caetano': ['Miguel', 'Davi', 'Isabella'], 'Miranda': ['Arthur', 'Pedro'], 'Moraes': ['Heitor', 'Theo', 'Laura', 'Gael', 'Valentina', 'Manuela'], 'Pereira': ['Helena', 'Alice', 'Benício'], 'Alves': ['Gabriel', 'Bernardo', 'Lorenzo', 'Cecília'], 'Melo': ['Samuel', 'Sophia', 'Júlia'], 'Silva': ['Heloísa', 'Lorena', 'Lucas']}
    self.assertEqual(expected_info, group_lastnames())