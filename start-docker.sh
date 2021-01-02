#!/bin/sh

# 启动脚本

echo "Git Pull"

git pull &&

echo "start docker"

docker build -t double-official1 . &&

container=$(docker container ls -aqf "name=double-official1")

if [ -n "$container" ]; then
    echo "stop container and rm container"
    docker container stop $container
    docker container rm $container

    echo "start container"
    docker run --name double-official1 -d -p  3020:3020 double-official1
else
    echo "start container"
    docker run --name double-official1 -d -p  3020:3020 double-official1  
fi
