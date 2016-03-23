#!/bin/bash

cd /home/ubuntu

sudo apt-get install supervisor xvfb fluxbox x11vnc libnotify-dev

git clone git://github.com/kanaka/noVNC

# .bashrc の末尾に環境変数DISPLAYを追加
echo # DISPLAY >> ~/.bashrc
echo export DISPLAY=":99" >> ~/.bashrc
