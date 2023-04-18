FROM node:14-alpine as base

WORKDIR /app
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install
COPY . .
CMD node consumer.js