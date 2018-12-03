#!/usr/bin/env python3
# -*- coding: utf-8 -*-#
# -------------------------------------------------------------------------------
# Name:         bs4
# Description:  
# Author:       14922
# Date:         2018/12/3
# -------------------------------------------------------------------------------

# 引入开发包
from urllib.request import urlopen
from bs4 import BeautifulSoup

resp = urlopen('https://zh.wikipedia.org/wiki/Wikipedia').read().decode('utf-8')
print(resp)
soup = BeautifulSoup(resp, 'html.parser')
