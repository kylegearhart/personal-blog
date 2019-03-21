#!/bin/sh

sudo apt-get --only-upgrade install google-chrome-stable
nvm install $NODE_VERSION
npm install -g @angular/cli
cd frontend/
npm ci
cd _
make e2e
