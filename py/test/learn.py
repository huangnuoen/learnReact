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
# # def triangles():
# #     # n = 1
# #     L = [0, 1, 0]
# #     yield [1]
# #     # while n <= 6:
# #         # L = [x // x for x in range(1, n)]
# #         # n = n+1
# #         # L=[]
# #         # L = list(range(1,n))
#
# #         # for x in range(1, n-1):
# #         # L.append(x)
# #         # L[x]=L[x]
# #         # L[x]=L[x-1]+L[x]
# #     while 1:
# #       L = [L[x] for x in range(1, n)]
# #       yield L
# #       L = [0]+L+[0]
#
# #     return
#
#
# # for n in triangles():
# #     print(n)
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
# class Dict(dict):
#     def __init__(self, **kw):
#         super().__init__(**kw)
#
#     def __getattr__(self, key):
#         try:
#             return self[key]
#         except KeyError:
#             raise AttributeError(r"'Dict' object has no attribute '%s'" % key)
#
#     def __setattr__(self, key, value):
#         self[key] = value


# f = open('C:/Users/14922/Desktop/test.txt', 'w')
# f.write('hi')

# from datetime import datetime
# dt=datetime(2016,4,2,12,22)
# print(dt)

# import requests
#
# r = requests.get('https://www.douban.com/',params={'cat':'1001'})
# print(r.url)

from tkinter import *
import tkinter.messagebox as messagebox

# class Application(Frame):
#     def __init__(self, master=None):
#         Frame.__init__(self, master)
#         self.pack()
#         self.createWidgets()
#
#     def createWidgets(self):
#         self.nameInput = Entry(self)
#         self.nameInput.pack()
#         self.alertButton = Button(self, text='hello', command=self.hello)
#         self.alertButton.pack()
#
#     def hello(self):
#         name = self.nameInput.get() or 'world'
#         messagebox.showinfo('Message', 'hello %s' % name)
#
#
# app = Application()
# # 设置窗口标题:
# app.master.title('Hello World')
# # 主消息循环:
# app.mainloop()


# # 导入MySQL驱动:
# import mysql.connector
#
# # 注意把password设为你的root口令:
# conn = mysql.connector.connect(user='root', password='', database='mysql')
# cursor = conn.cursor()
# # 创建user表:
# cursor.execute('create table user (id varchar(20) primary key, name varchar(20))')
# # 插入一行记录，注意MySQL的占位符是%s:
# cursor.execute('insert into user (id, name) values (%s, %s)', ['1', 'Michael'])
# cursor.rowcount
# # 1
# # 提交事务:
# conn.commit()
# cursor.close()
# # 运行查询:
# cursor = conn.cursor()
# cursor.execute('select * from user where id = %s', ('1',))
# values = cursor.fetchall()
# # values
# # [('1', 'Michael')]
# # 关闭Cursor和Connection:
# cursor.close()
# # True
# conn.close()

# from urllib import request
# from urllib import parse
#
# # get
# req = request.Request('http://www.thsrc.com.tw/tw/TimeTable/SearchResult')
# postData = parse.urlencode([
#     ('StartStation', '2f940836-cedc-41ef-8e28-c2336ac8fe68'),
#     ('EndStation', '977abb69-413a-4ccf-a109-0272c24fd490'),
#     ('DepartueSearchDate', '2018/12/03'),
#     ('DepartueSearchTime', '15:30'),
#     ('StartStationName', '南港站'),
#     ('EndStationName', '台北站'),
#     ('SearchType', 'S')
# ])
# req.add_header('Origin', 'http://www.thsrc.com.tw')
# req.add_header('User-Agent',
#                'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36')
# resp = request.urlopen(req)
# # post
#
# print(resp.read().decode('utf-8'))
