#!/usr/bin/env python3
# -*- coding: utf-8 -*-#
# -------------------------------------------------------------------------------
# Name:         dmoz_spider
# Description:  
# Author:       14922
# Date:         2018/12/3
# -------------------------------------------------------------------------------

import sys
import scrapy


class DmozSpider(scrapy.Spider):
    name = 'dmoz'
    allowed_domains = ['dmoz.org']
    start_urls = [
        'https://movie.douban.com/cinema/nowplaying/hangzhou/'
    ]

    def parse(self, response):
        filename = response.url.split("/")[-2] + '.html'
        with open(filename, 'wb') as f:
            f.write(response.body)
