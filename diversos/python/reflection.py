class Greeting:
  def __init__(self, name):
    self.name = name

  def __getattr__(self, greet):
    def call_():
      greeting_msg = greet.replace("_", " ")
      print(f"{self.name}, {greeting_msg}")

    return call_
    
greeting = Greeting("Margarida")

greeting.prazer_em_conhece_la()

greeting.bom_dia()