FROM node:latest

WORKDIR /usr/src/app

COPY . . 

USER root

RUN npm install

EXPOSE 3000

ENTRYPOINT [ "node", "app.js" ]
