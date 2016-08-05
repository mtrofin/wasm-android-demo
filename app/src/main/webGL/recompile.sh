#!/bin/bash
#A script for recompiling the webGL application

SOURCEDIR=/usr/local/google/home/clarkchenwang/AndroidStudioProjects/MoreTeapots/app/src/main/webGL
DESTDIR=/var/www/html/webGL

rm -rf ${DESTDIR}/*
cp -R ${SOURCEDIR}/* ${DESTDIR}
sudo chmod 777 -R ${DESTDIR}