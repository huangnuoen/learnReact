#!/usr/bin/env python3
# -*- coding: utf-8 -*-#
# -------------------------------------------------------------------------------
# Name:         server
# Description:  
# Author:       14922
# Date:         2018/11/22
# -------------------------------------------------------------------------------
import socket

s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
s.bind(('127.0.0.1', 9999))
print('bind 9999 UDP')
while True:
    data, addr = s.recvfrom(1024)
    print('received from %s:%s' % addr)
    s.sendto(b'hello, %s!' % data, addr)
