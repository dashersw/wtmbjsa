FROM node:8.11.1-alpine

WORKDIR /app
VOLUME /app/src
VOLUME /app/static
VOLUME /app/config

ADD package.json package-lock.json ./
RUN npm install

ADD . .
ADD build build

CMD ["npm", "start"]
