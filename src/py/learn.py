# def calc(*num):
#     # print(num)
#     sum = 0
#     for n in num:
#         sum = sum + n * n
#
#     return sum
#
#
# num = [1, 2]
# print(calc(1, 2))
#
#
# def person(name, age, **kw):
#     print(name, age, kw)
#
#
# person('Mike', 12, city='BJ')
#
#
# def product1(*args):
#     print(args)
#     s = 1
#     for n in args:
#         s = s * n
#     return s
#
#
# a = product1(1, 2, 3)
# print('第一种：', a)
#
#
# def product2(*args):
#     print(args)
#     s = 1
#     for n in args:
#         s = s * n
#     return s
#
#
# a = product2(1, 2, 3)
# print('第二种：', a)
# print('递归')
#
# print('尾调用')
#
#
# def fact(n):
#     return fact_iter(n, 1)
#
#
# def fact_iter(num, product):
#     if num == 1:
#         return product
#     print('fact_iter(', num, '-1,', num, '*', product, ')')
#     return fact_iter(num - 1, num * product)
#
#
# print(fact(2))
#
#
# # 把最上面(n-1) 个盘子从a， 经过c 移动到b,
# # 把1个盘子，从a 直接移动到 c,
# # 把b 上的 n-1 个盘子从 b 经过 a 移动到c
# # 至于怎么把 n-1个盘子移过去,那是另一层move干的事
#
#
# def move(n, a, b, c):
#     if n == 1:
#         print('move', a, '-->', c)
#     else:
#         move(n - 1, a, c, b)
#         move(1, a, b, c)
#         move(n - 1, b, a, c)
#
#
# move(3, 'A', 'B', 'C')
#
#
# def trim(s):
#     if (s == ''):
#         return ''
#     if (s[0] == ' '):
#         return trim(s[1:])
#     if (s[-1] == ' '):
#         return trim(s[:-1])
#     return s
#
#
# print(trim(' hello '))
#
#
# def findMinAndMax(L):
#     if (len(L) == 0):
#         return (None, None)
#     min = max = L[0]
#     for k in L:
#         if k >= max:
#             max = k
#         if k <= min:
#             min = k
#
#     return (min, max)
#
#
# L = ['Hello', 'World', 18, 'IBM', 'Apple']
# b = [s.lower() for s in L if isinstance(s, str)]
# print(b)
#
#
# def fib(max):
#     n, a, b = 0, 0, 1
#     while n < max:
#         yield b
#         a, b = b, a + b
#         n = n + 1
#     return 'done'
#
#
# def odd():
#     print('step1')
#     yield 1
#     print('step2')
#     yield 3
#     print('step3')
#     yield 5
#
#
# next(odd())
#
# # def triangles():
# #   i=1
# #   arr = list(range(9))
# #   while i<=6:
# #     print(i)
# #     i=i+1
# #     n=i
# #     arr[i]
# #     # while n!=0:
# #       # n=n-1
# #       # arr[i].append(1)
#
# #   return print(arr)
# # triangles()
#
#
def triangles():
    n = 1
    while n <= 6:
        if n == 1:
            t = [1]
            yield t
        else:
            t2 = [0] + t + [0]
            i = 0
            t3 = []
            while i < len(t2) - 1:
                t3.append(t2[i] + t2[i + 1])
                # t3[0]=t2[i]+t2[i+1]
                i = i + 1
            t = t3
            yield t
        n = n + 1


for n in triangles():
    print(n)


#
# L = list(range(1, 9))
#
#
# def f(x):
#     return x % 2 == 1
#
#
# r = filter(f, L)
# print(list(r))
#
# a = sorted(['Bob', 'Za', 'cdd'], key=str.lower)
# print(a)
# L = [('Bob', 75), ('Adam', 92), ('Bart', 66), ('Lisa', 88)]
#
#
# def by_name(t):
#     name, score = t
#     print(str.lower(name))
#     return (str.lower(name), score)
#
#
# # sorted(L,key=by_name)
# print(sorted(L, key=by_name))
#
#
# def count():
#     fs = []
#
#     def f(j):
#         def g():
#             return j * j
#
#         return g
#
#     for i in range(1, 4):
#         fs.append(f(i))
#     return fs
#
#
# def createCounter():
#     ans = [0]
#
#     # n = ans[0]
#     def counter():
#         ans[0] += 1
#         return ans[0]
#
#     return counter
#
#
# a = createCounter()
# print(createCounter()(), createCounter()(), a())
#
#
# def log(func):
#     def wrapper(*args, **kw):
#         print('call %s():' % func.__name__)
#         return func(*args, **kw)
#
#     return wrapper
#
#
# @log
# def now():
#     print('16:48')
#
#
# now()
#
#
# def metric(fn):
#     print('%s executed in %s ms' % (fn.__name__, 10.24))
#     return fn
#
#
# @metric
# def fast(x, y):
#     # time.sleep(0.0012)
#     return x + y
#
#
# f = fast(11, 22)
#
#
# # 声明类
# class Student(object):
#     def __init__(self, name, score):
#         self.__name = name
#         self.__score = score
#
#     def print_score(self):
#         print('%s考了 %s 分' % (self.__name, self.__score))
#
#     def get_grade(self):
#         if self.__score >= 90:
#             return 'A'
#         elif self.__score >= 60:
#             return 'B'
#         else:
#             return 'C'
#
#
# # 实例
# bart = Student('Bart', 90)
# # bart.print_score()
# print(bart.get_grade())


# class Student(object):
#     count = 0
#
#     def __init__(self, name):
#         Student.count = Student.count + 1
#         self.name = name
#
# Mike=Student('Mike')
# Amy=Student('Amy')
# Rose=Student('Rose')
# print(Student.count)

# class Screen(object):
#     def __init__(self, width, height):
#         self.__width = width
#         self.__height = height
#
#     # @property
#     # def width(self):
#     #     return self.__width
#
#     # @width.setter
#     # def width(self, width):
#     #     self.__width = width
#
#
# a = Screen('180px', '200px')
# # a.__width='200px'
# print(a.__width)

