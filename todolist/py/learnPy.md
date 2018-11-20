## 安装 Pyth

### 数据类型

1. 整数

- int(str) 将字符串转成数字

2. 浮点数

- 整数和浮点数在计算机内部存储的方式是不同的，整数运算永远是精确的（除法难道也是精确的？是的！），而浮点数运算则可能会有四舍五入的误差。

3. 字符串

- 不可变对象
- 字符串内部包含`'`可以用`\`转义标识
- `\n`：换行，`\t`：制表符，`'''...'''`：多行
- str.replace(s1,s2) 返回一个新字符串对象

4. 布尔值：`True`、`False`

- 布尔值可以用`and`、`or`和`not`运算。

5. 空值 `None`

### 变量

```
a='ABC'
```

Python 解释器做了 2 件事

1. 在内存中创建了一个`'ABC'`的字符串；
2. 在内存中创建了一个名为`a`的变量，并把它指向'ABC'。

### 字符串和编码

1. Py 的字符串是以 Unicode 编码的
2. 提供了`ord()`获取字符的整数表示，`chr()`把编码转换为对应字符
3. 由于 Python 的字符串类型是 str，在内存中以 Unicode 表示，一个字符对应若干个字节。如果要在网络上传输，或者保存到磁盘上，就需要*把 str 变为以字节为单位的 bytes*。

- Python 对 bytes 类型的数据用带 b 前缀的单引号或双引号表示：`x=b'ABC'`
- 纯英文的 str 可以用 ASCII 编码为 bytes，内容是一样的，含有中文的 str 可以用 UTF-8 编码为 bytes。含有中文的 str 无法用 ASCII 编码，因为中文编码的范围超过了 ASCII 编码的范围，Python 会报错。

4. 解码和转码：`decode()` `encode()`

```
>>> b'\xe4\xb8\xad\xe6\x96\x87'.decode('utf-8')
>>>'中文'
```

5. len(str)计算 str 字符数

注：在操作字符串时，我们经常遇到 str 和 bytes 的互相转换。为了避免乱码问题，应当始终坚持使用 UTF-8 编码对 str 和 bytes 进行转换。

6. 格式化输出

- 占位符

  | 占位符 | 替换内容 |
  | ------ | :------- |
  | %d     | 整数     |
  | %f     | 浮点数   |
  | %s     | 字符串   |
  | %x     | 十六进制 |
  | %%     | %        |

- format()

### list

- 有序的集合

1. `len(list)` 获取长度
2. ` list.append('a')``list.insert(1, 'J') `
3. `list.pop()` 删除末尾元素，`list.pop(1)`删除指定元素
4. `range(num)` 生成一个整数序列，可以通过 list()转换成 list
5. `list.sort()` 升序

```
LIST = [1,2,3]
list(range(2)) >>> [0,1 ]
```

### tuple

- 另一种有序列表叫元组：tuple。tuple 和 list 非常类似，但是 tuple 一旦初始化就*不能修改*

```
t = (1,2)
t = (1,)
t = ()
t = ('a','b',['c'])
t[2][0] = 'D'
t >>> ('a','b',['D'])
```

### 条件判断

1. if xxx:
   elif xxx:
   else:

### 循环

1. for x in list:

```
names = list(range(101))
sum=0
for x in names:
  sum = x + sum
print(sum)
>>> 5050
```

2. while n>0:
```
sum = 0
n =100
while n > 0:
    sum = sum+n
    n = n-1
print(sum)
```
3. break 提前退出循环
4. continue 跳过当前循环

### dict
- 有点类似ES6中的Map
- `key in d` 判断是否存在key
- `d.get(key[,value])` 可判断是否存在key和指定value
- `d.pop(key)`  删除对应key
- 特点：
查找和插入的速度极快，不会随着key的增加而变慢；
需要占用大量的内存，内存浪费多。
- dict的key必须是不可变对象：因为dict根据key来计算value的存储位置，如果每次计算相同的key得出的结果不同，那dict内部就完全混乱了。这个通过key计算位置的算法称为哈希算法（Hash）

### set 
- 一组key的集合，不存储value, 没有重复的key,类似es6中的Set
- 要提供一个list作为输入集合
```
s = set([1,2,2,3])
print(s) >>> {1,2,3}
```
- `s.add(key)``s.remove(key)`

## 函数 
### 数据类型转换
1. int()
2. float()
3. str()
4. bool()
5. isinstance(x, (int, float)) 检查类型
### 定义函数 
1. 定义函数时，需要确定函数名和参数个数；
2. 如果有必要，可以先对参数的数据类型做检查；
3. 函数体内部可以用return随时返回函数结果；
4. 函数执行完毕也没有return语句时，自动return None。
5. 函数可以同时返回多个值，但其实就是一个tuple。
```
import math
def move(x, y, step, angle=0):
    nx = x+step*math.cos(angle)
    ny = y+step*math.sin(angle)
    return nx, ny
x, y = move(100, 100, 60, math.pi/6)
print(x, y)
```
### 参数
#### 默认参数
- 必须指向不变对象

#### 可变参数
- 当参数个数不确定时，可以把参数作为List/tuple传进来，
- 把函数的参数改为可变参数, 加个`*`,调用时可以传入任意个参数，包括0个
- 也可以在调用时在list/tuple前加`*`,把参数变成可变参数
#### 关键字参数
- 可变参数允许你传入0个或任意个参数，这些可变参数在函数调用时自动组装为一个tuple。而关键字参数允许你传入0个或任意个含参数名的参数，这些关键字参数在函数内部自动组装为一个dict
```
def person(name,age,**kw):
    print(name, age, kw)

person('Mike', 12,city='BJ')
>>> Mike 12 {'city': 'BJ'}
```
#### 命名关键字参数
- 如果要限制关键字参数的名字，就可以用命名关键字参数
- 命名关键字参数需要一个特殊分隔符`*`，`*`后面的参数被视为命名关键字参数
```
def person(name,age,*,city,job):
```
- 如果函数定义中已经有了一个可变参数，后面跟着的命名关键字参数就不再需要一个特殊分隔符`*`了
```
def person(name,age,*args,city,job):
```
- 命名关键字参数必须传入参数名，这和位置参数不同。如果没有传入参数名，调用将报错

#### 参数组合
- 可以用必选参数、默认参数、可变参数、关键字参数和命名关键字参数，这5种参数都可以组合使用。
- 参数定义的顺序必须是：必选参数、默认参数、可变参数、命名关键字参数和关键字参数。

### 递归
函数调用是通过栈（stack）这种数据结构实现的，每当进入一个函数调用，栈就会加一层栈帧，每当函数返回，栈就会减一层栈帧。由于栈的大小不是无限的，所以，递归调用的次数过多，会导致栈溢出。
```
# 实现1*2*3……*n
def fact(n):
    if(n == 1):
        return 1
    print(n, '*fact(', n, '-1)')
    return n*fact(n-1)
```
#### 栈溢出
可通过尾递归优化：
在函数返回时调用自身，且return语句不能包含表达式
```
```
#### 了解一下汉诺塔

## 高级特性 
### 切片
1. `L[0:3]` 取0-2的元素
2. `L[-2:-1]`支持倒数
3. `L[0:10:2]` 前10个元素，每2个取一个
4. `L[:]` 复制
5. List,tuple,字符串都可以切片
```
# 切片实现trim方法
def trim(s):
    if(s==''):
        return ''
    if(s[0]==' '):
        return trim(s[1:])
    if(s[-1]==' '):
        return trim(s[:-1])
    return s
print(trim(' hello '))

```
### 迭代 循环
1. 类型：list,dict,字符串
```
for k in d
for val in d.values()
for k,v in d.items()
for ch in 'ABC'
```
2. `from collections import Iterable` 通过collections模块的Iterable类型判断
```
from collections import Iterable
 isinstance('abc', Iterable) # 判断str是否可迭代
```
3. 用迭代判断min max
```
def findMinAndMax(L):
    if(len(L) == 0):
        return (None, None)
    min = max = L[0]
    for k in L:
        if k >= max:
            max = k
        if k <= min:
            min = k
    return (min, max)

```

### 列表生成式
```
a = [x*x for x in range(1, 5) if x % 2 == 0]
>>> [4,16]
# 打印出当前目录
import os
a1 =[d for d in os.listdir('.')]
print(a1)
```
### 生成器
1. `generator`生成器 一边循环一边计算的机制
```
a = (x*x for x in range(1, 5))
print(a)
>>> <generator object <genexpr> at 0x1022ef630>
# 打印generator元素
next(a)
# for 循环
for n in a:
    print(n)
```
2. `generator`和函数的执行流程不一样。函数是顺序执行，遇到`return`语句或者最后一行函数语句就返回。而变成generator的函数，在每次调用`next()`的时候执行，遇到`yield`语句返回，再次执行时从上次返回的`yield`语句处继续执行。
3. 调用`generator`时，生成一个`generator`对象，然后用next()不断获得下一个值返回值
4. 用`for循环`调用`generator`时，发现拿不到`generator`的return语句的返回值。如果想要拿到返回值，必须捕获`StopIteration`错误，返回值包含在`StopIteration`的value中

### 迭代器
1. `Iterable` 可迭代对象：

  1.1 集合数据：`list`,`tuple`, `dict`, `set`, `str`

  2.2 `generator`
2. `isInstance()` 判断
3. 可以被`next()`函数调用并不断返回下一个值的对象称为迭代器:`interator`
4. `interator`  是惰性序列，可以通过next(),list()计算
## 函数式编程`Functional Programming`
### 高阶函数`Higher-order function`
1. map(f, interable)
2. reduce() 把一个函数作用在一个序列[x1, x2, x3, ...]上，这个函数必须接收两个参数，reduce把结果继续和序列的下一个元素做累积计算,例如对序列求和
3. `filter()`把传入的函数依次作用于每个元素，然后根据返回值是True还是False决定保留还是丢弃该元素。
4. `sort(interable[,key=function,reverse=Bool])`

### 闭包
1. 内部函数可以引用外部函数的参数和局部变量，当返回函数时，相关参数和变量都保存在返回的函数中，这种称为`闭包（Closure）`
2. 每次调用都返回`新的函数`

### 匿名函数
1. `lambda:x`
2. 匿名函数只能有一个表达式，不用`return`

### 装饰器
1. 在函数调用前后自动打印日志，但又不希望修改函数的定义，这种在代码运行期间动态增加功能的方式，称之为“装饰器”（`Decorator`）。
```
def log(func):
    def wrapper(*args,**kw):
        print('call %s():' % func.__name__)
        return func(*args,**kw)
    return wrapper
# 打印日志
@log
def now():
    print('16:48')
now()
```
`log`是decorator,接受一个函数作参数，返回一个函数


## 模块

### 引入
1. `import sys`
2. 作用域

### 第三方模块
`pip install Pillow`
1. 安装常用模块 Anaconda

## 面对对象 Object Oriented Programming
1. 所有数据类型都可以视为对象，也可以自定义对象。自定义对象数据类型就是类`class`
2. 
```

```

#