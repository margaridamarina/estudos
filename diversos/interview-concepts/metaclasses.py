class PrintOnCreation(type):
  def __call__(self, *args, **kwargs):
    print('Instance of Planet created')

class Planet(metaclass=PrintOnCreation):
  def __init__(self, cities):
    self.cities = cities

earth = Planet(['Paris, Oslo'])