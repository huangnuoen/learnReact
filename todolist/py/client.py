#!/usr/bin/env python3
# -*- coding: utf-8 -*-#
# -------------------------------------------------------------------------------
# Name:         client
# Description:  
# Author:       14922
# Date:         2018/11/22
# -------------------------------------------------------------------------------

import socket

# s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# s.connect(('www.sina.com.cn', 80))
# # 发送数据:
# s.send(b'GET / HTTP/1.1\r\nHost: www.baidu.com\r\nConnection: close\r\n\r\n')
# buffer = []
# while True:
#     d = s.recv(1024)
#     if d:
#         buffer.append(d)
#     else:
#         break
# data = b''.join(buffer)
# print(data);
# header, html = data.split(b'\r\n\r\n', 1)
# print(header.decode('utf-8'))
# with open('sina.html', 'wb') as f:
#     print(f)
#     f.write(html)
# s.close()
s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
for data in [b'Mike', b'Tracy', b'sarach']:
    s.sendto(data, ('127.0.0.1', 9999))
    print(s.recv(1024).decode('utf-8'))
s.close()
s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
