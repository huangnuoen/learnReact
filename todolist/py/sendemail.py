#!/usr/bin/env python3
# -*- coding: utf-8 -*-#
# -------------------------------------------------------------------------------
# Name:         sendemail
# Description:  
# Author:       14922
# Date:         2018/11/22
# -------------------------------------------------------------------------------

from email.mime.text import MIMEText

# 参数：正文，mime的subtype, 编码
msg = MIMEText(
    'hello, send by python...hello, send by python...hello, send by python...hello, send by python...hello, send by python...hello, send by python...hello, send by python...hello, send by python...hello, send by python...',
    'plain', 'utf-8')

# from_addr = input('From: ')
from_addr = '15907674738@163.com'
# password = input('Password: ')
password = 'Hne0316'
# to_addr = input('To: ')
to_addr = '1261290560@qq.com'
# smtp_server = input('SMTP server: ')
smtp_sever = 'smtp.163.com'
import smtplib

# 发送邮箱地址
msg['From'] = from_addr
# 收件箱地址
msg['To'] = to_addr
# 主题
msg['Subject'] = 'the frist mail'
server = smtplib.SMTP(smtp_sever, 25)
# server.set_debuglevel(1)
server.login(from_addr, password)
server.sendmail(from_addr, [to_addr], msg.as_string())
server.quit()
