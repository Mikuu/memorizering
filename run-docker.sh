docker run -d -p 3400:3400 -e MMR_ENV=docker -e MEMORIZEND_HOST=memorizend -e MEMORIZEND_PORT=3401 --network mmr-network --name memorizering memorizering:0.0.1
