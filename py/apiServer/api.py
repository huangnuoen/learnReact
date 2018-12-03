#!/usr/bin/env python3
# -*- coding: utf-8 -*-#
# -------------------------------------------------------------------------------
# Name:         api
# Description:  
# Author:       14922
# Date:         2018/11/29
# -------------------------------------------------------------------------------

# coding:utf-8

from flask import Flask, request, redirect, jsonify
import json
import mysql

app = Flask(__name__)


@app.route("/")
def hello():
    return "Hello World!"


@app.route('/get')
def start():
    # db = mysql.Mysql()
    return 'jsonify(db.queryData())'


if __name__ == "__main__":
    app.run()
