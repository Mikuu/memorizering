FROM node:21-alpine as build
WORKDIR /app
COPY . .
COPY ./src/configs/memorizend.docker.js ./src/configs/memorizend.js
RUN npm install
RUN npm run build

FROM node:21-alpine
WORKDIR /root/
COPY --from=build /app/dist ./dist
RUN npm install -g serve
EXPOSE 3400
CMD ["serve", "-s", "dist", "-l", "3400"]
