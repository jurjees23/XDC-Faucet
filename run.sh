#!/bin/bash
git pull origin master
docker build -t parmarrushabh/Faucet-1 .
docker stop faucet
docker run -d -p 80:3000 --name faucet --restart on-failure:10 parmarrushabh/Faucet-1
