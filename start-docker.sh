#!/bin/sh

# 启动脚本

echo "Git Pull"

git pull &&

echo "start docker"

docker build -t pnuxt-pc . &&

container=$(docker container ls -aqf "name=pnuxt-pc")

if [ -n "$container" ]; then
    echo "stop container and rm container"
    docker container stop $container
    docker container rm $container

    echo "start container"
    docker run --name pnuxt-pc -d -p  3020:3020 pnuxt-pc
else
    echo "start container"
    docker run --name pnuxt-pc -d -p  3020:3020 pnuxt-pc  
fi
