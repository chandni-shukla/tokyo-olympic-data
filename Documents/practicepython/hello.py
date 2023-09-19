# hey chandni,please don't remove this line
# Author:harry
# print("hey I am\' a \"good girl\"\nand you are a bad girl/boy")
# a=134
# print(a)
# a1=5
# b="chandni"
# print(b)
# print(a+a1)
# c = complex(8,2)
# print(c)
# print("the type of a is", type(a))
# print("the type of b is", type(b))
# print("the type of a1 is", type(a1))ch
# print("the type of c is", type(c))
# list1=[5,4.3,[-4,5],["apple","banana"]]
# print(list1)
# tuple1=(("parrot", "sparrow"), ("tiger","lion"))
# print(tuple1)
# dict={"name":"chandni", "age":20, "canVote": True}
# print(dict)
# a = input("enter your name:")
# print("my name is:",a)
# x = input("enter your number:")
# y = input("enter your number")
# print(int(x)+int(y))
# name = "chandani"
# print("hello", name)
# print(name[0])
# print(name[1])
# print(name[2])
# print(name[3])
# print("lets use a for loop\n")
# for character in name:
#     print(character)
# names = "chandni,archana"
# print(len(names))
# print(names[-3:-1])
# nm = "harry"
# print(nm[-4:-2])
# a = "!!!chandni!! !!!!!! chandni!!!!!"
# print(len(a))
# print(a.upper())
# print(a.lower())
# print(a.rstrip("!"))
# print(a.replace("chandni","archana"))
# print(a.split(" "))
# blogHeading = "introduction to js"
# print(blogHeading.capitalize())
# str="welcome to the console!!"
# print(len(str))
# print(len(str.center(50)))
# print(a.count("chandni"))
# print(str.endswith("!!"))
# print(str.find("thehh"))
# print(str.index("the"))
# str1="WelcometotheConsole00"
# print(str1.isalnum())
# str1="Welcome00"
# print(str1.isalpha())
# str1="chandni"
# print(str1.islower())
# str1 = "Python is a interpreter language"
# print(str1.swapcase())
# str1 = "Python is a interpreter language"
# print(str1.title())
# a = int(input("enter your age"))
# print("your age is:",a)
# # print(a>18)
# print(a<=18)
# print(a==18)
# print(a!=18)
# if(a>18):
#     print("you can drive")
# else:
#     print("you can not drive")
# class MyClass:
#     def __init__(self, value):
#         self._value = value
#     def show(self):
#         print("value is {self._value}")
#     @property
#     def ten_value(self):
#         return 10* self._value
    
#     @ten_value.setter
#     def ten_value(self):
#         return 10* self._value
    
#     obj = MyClass()
#     obj.ten_value = 67
#     print(obj.ten_value)
#     obj.show()
import matplotlib
import matplotlib.pyplot as plt
import numpy as np
xpoints = np.array([0,6])
ypoints = np.array([0,250])
plt.plot(xpoints, ypoints)
plt.show()