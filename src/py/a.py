#!/usr/bin/env python3
# -*- coding: utf-8 -*-#
# -------------------------------------------------------------------------------
# Name:         a
# Description:  
# Author:       14922
# Date:         2018/11/19
# -------------------------------------------------------------------------------

import sys


def test():
    args = sys.argv
    if len(args) == 1:
        print('hello')
    elif len(args) == 2:
        print('hello, %s' % args[1])
    else:
        print('too many')


if __name__ == '__main__':
    test()
