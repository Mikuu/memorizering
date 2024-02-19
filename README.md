# Memorizer

Self tool for helping memorize english words.

## Project Setup

install dependencies
```commandline
npm install
```
run locally
```commandline
npm run dev
```

## Containerization

build image
```commandline
./dockering.sh build 0.0.1
```

tag image
```commandline
./dockering.sh tag 0.0.1
```

push image
```commandline
./dockering.sh push 0.0.1
```

run container
> for production only
```commandline
./run-docker.sh
```
