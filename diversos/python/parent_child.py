class Parent(object):
    x = 1

class Child1(Parent):
    pass

class Child2(Parent):
    pass

print(Parent.x, Child1.x, Child2.x)
Child1.x = 2
print(Parent.x, Child1.x, Child2.x)
Parent.x = 3
print(Parent.x, Child1.x, Child2.x)

#Why does changing the value of Parent.x also change the value of Child2.x, but at the same time not change the value of Child1.x?
#if any of its child classes overrides that value (for example, when we execute the statement Child1.x = 2), then the value is changed in that child only. 
#if the value is then changed in the Parent (for example, when we execute the statement Parent.x = 3), that change is reflected also by any children that have not yet overridden the value