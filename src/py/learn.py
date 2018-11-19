def calc(*num):
    # print(num)
    sum = 0
    for n in num:
        sum = sum+n*n

    return sum


num = [1, 2]
print(calc(1, 2))


def person(name, age, **kw):
    print(name, age, kw)


person('Mike', 12, city='BJ')


def product1(*args):
    print(args)
    s = 1
    for n in args:
        s = s * n
    return s


a = product1(1, 2, 3)
print('第一种：', a)


def product2(*args):
    print(args)
    s = 1
    for n in args:
        s = s * n
    return s


a = product2(1, 2, 3)
print('第二种：', a)
print('递归')


print('尾调用')


def fact(n):
    return fact_iter(n, 1)


def fact_iter(num, product):
    if num == 1:
        return product
    print('fact_iter(', num, '-1,', num, '*', product, ')')
    return fact_iter(num-1, num*product)


print(fact(2))

# 把最上面(n-1) 个盘子从a， 经过c 移动到b,
# 把1个盘子，从a 直接移动到 c,
# 把b 上的 n-1 个盘子从 b 经过 a 移动到c
# 至于怎么把 n-1个盘子移过去,那是另一层move干的事


def move(n, a, b, c):
    if n == 1:
        print('move', a, '-->', c)
    else:
        move(n-1, a, c, b)
        move(1, a, b, c)
        move(n-1, b, a, c)


move(3, 'A', 'B', 'C')


def trim(s):
    if(s == ''):
        return ''
    if(s[0] == ' '):
        return trim(s[1:])
    if(s[-1] == ' '):
        return trim(s[:-1])
    return s


print(trim(' hello '))


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


L = ['Hello', 'World', 18, 'IBM', 'Apple']
b = [s.lower() for s in L if isinstance(s, str)]
print(b)


def fib(max):
    n, a, b = 0, 0, 1
    while n < max:
        yield b
        a, b = b, a+b
        n = n+1
    return 'done'


def odd():
    print('step1')
    yield 1
    print('step2')
    yield 3
    print('step3')
    yield 5


next(odd())

# def triangles():
#   i=1
#   arr = list(range(9))
#   while i<=6:
#     print(i)
#     i=i+1
#     n=i
#     arr[i]
#     # while n!=0:
#       # n=n-1
#       # arr[i].append(1)

#   return print(arr)
# triangles()


def triangles():
    # n = 1
    L = [0, 1, 0]
    yield [1]
    # while n <= 6:
        # L = [x // x for x in range(1, n)]
        # n = n+1
        # L=[]
        # L = list(range(1,n))

        # for x in range(1, n-1):
        # L.append(x)
        # L[x]=L[x]
        # L[x]=L[x-1]+L[x]
    while 1:
      L = [L[x] for x in range(1, n)]
      yield L
      L = [0]+L+[0]

    return


for n in triangles():
    print(n)
