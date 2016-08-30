#!/bin/bash
#A script for recompiling the webGL application

SOURCEDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
DESTDIR=/var/www/html/webGL

rm -rf ${DESTDIR}/*
cp -R ${SOURCEDIR}/* ${DESTDIR}
sudo chmod 777 -R ${DESTDIR}
