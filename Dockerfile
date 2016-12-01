FROM node:6.9.1-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install
COPY . /usr/src/app
RUN npm run build

CMD [ "npm", "start" ]