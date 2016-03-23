#!/bin/bash

cd /home/ubuntu

sudo apt-get install supervisor xvfb fluxbox x11vnc libnotify-dev unifont

#libdbusmenu-glib4 libdbusmenu-gtk4 libindicator7 fonts-liberation libappindicator1 xdg-utils language-pack-ja-base language-pack-ja
#sudo update-locale LANG=ja_JP.UTF-8 LANGUAGE=”ja_JP:ja”
#source /etc/default/locale
   
git clone git://github.com/kanaka/noVNC

# .bashrc の末尾に環境変数DISPLAYを追加
echo # DISPLAY >> ~/.bashrc
echo export DISPLAY=":99" >> ~/.bashrc
