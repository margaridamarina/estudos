class Retangulo:

    def __init__(self, x, y):
        self.__x = x
        self.__y = y
        self.__area = x * y

    def obter_area(self):
        return self.__area

    @staticmethod
    def somaum(x):
        return x + 1

r = Retangulo(7,6)
r.area = 7
print(r.obter_area())
# print(r.area)
# print(r.somaum(2))
print(r.somaum(2))
