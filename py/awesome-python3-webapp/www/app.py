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
