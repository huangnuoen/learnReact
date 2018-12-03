#!/usr/bin/env python3
# -*- coding: utf-8 -*-#
# -------------------------------------------------------------------------------
# Name:         app
# Description:  
# Author:       14922
# Date:         2018/11/22
# -------------------------------------------------------------------------------

import logging;

logging.basicConfig(level=logging.INFO)
# asyncio内置了对异步IO的支持
import asyncio, os, json, time
from datetime import datetime

# aiohttp是基于asyncio实现的HTTP框架
from aiohttp import web


def index(request):
    return web.Response(body='<h1>AWesome</h1>'.encode('utf-8'), content_type='text/html')


# 把一个generator标记为coroutine类型，然后，我们就把这个coroutine扔到EventLoop中执行
# aiohttp的初始化函数init()是个coroutine
@asyncio.coroutine
def init(loop):
    app = web.Application()
    app.router.add_route('GET', '/', index)
    # loop.create_server()利用asyncio创建TCP服务。
    srv = yield from loop.create_server(app._make_handler(), '127.0.0.1', 9000)
    logging.info('server started at http://127.0.0.1:9000...')
    return srv


# init()
# 获取EventLoop
loop = asyncio.get_event_loop()
loop.run_until_complete(init(loop))
loop.run_forever()


# 创建连接池
@asyncio.coroutine
def create_pool(loop, **kw):
    logging.info('create database connection pool...')
    global __pool
    __pool = yield from aiomysql.create_pool(
        host=kw.get('host', 'localhost'),
        port=kw.get('port', 3306),
        user=kw['user'],
        password=kw['password'],
        db=kw['db'],
        charset=kw.get('charset', 'utf8'),
        autocommit=kw.get('autocommit', True),
        maxsize=kw.get('maxsize', 10),
        minsize=kw.get('minsize', 1),
        loop=loop
    )

import aiomysql
# select函数
@asyncio.coroutine
def select(sql, args, size=None):
    log(sql, args)
    global __pool
    with (yield from __pool) as conn:
        cur = yield from conn.cursor(aiomysql.DictCursor)
        yield from cur.execute(sql.replace('?', '%s'), args or ())
        # 判断获取多少数量的记录
        if size:
            rs = yield from cur.fetchmany(size)
        else:
            rs = yield from cur.fetchall()
        yield from cur.close()
        logging.info('rows returned: %s' % len(rs))
        return rs
