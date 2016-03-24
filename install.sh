#!/bin/bash

cd /home/ubuntu/workspace/

sudo apt-get update
sudo apt-get install supervisor xvfb fluxbox x11vnc libnotify-dev unifont

npm install

cd /home/ubuntu
git clone git://github.com/kanaka/noVNC

# .bashrc の末尾に環境変数DISPLAYを追加
echo # DISPLAY >> ~/.bashrc
echo export DISPLAY=":99" >> ~/.bashrc

# sqlite3 のリビルド
#cd node_modules/sqlite3
#npm run prepublish
#node-gyp configure --module_name=node_sqlite3 --module_path=./lib/binding/node-v46-linux-x64
#node-gyp rebuild --target=0.37.2 --arch=x64 --target_platform=linux --dist-url=https://atom.io/download/atom-shell --module_name=node_sqlite3 --module_path=./lib/binding/node-v46-linux-x64
