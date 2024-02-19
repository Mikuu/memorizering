#!/bin/bash

if [ $# -lt 2 ]; then
  echo "Usage: $0 <command> <version>"
  exit 1
fi

command="$1"
version="$2"

case "$command" in
  "build")
    docker build -t memorizering:$version .
    ;;
  "tag")
    docker tag memorizering:$version ariman/memorizering:$version
    ;;
  "push")
    docker push ariman/memorizering:$version
    ;;
  *)
    echo "Unknown command: $command"
    exit 1
    ;;
esac

exit 0
