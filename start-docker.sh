#!/bin/sh

# 启动脚本

echo "Git Pull"

git pull &&

echo "start docker"

docker build -t double-official . &&

container=$(docker container ls -aqf "name=double-official")

if [ -n "$container" ]; then
    echo "stop container and rm container"
    docker container stop $container
    docker container rm $container

    echo "start container"
    docker run --name double-official -d -p  3020:3020 double-official
else
    echo "start container"
    docker run --name double-official -d -p  3020:3020 double-official  
fi
