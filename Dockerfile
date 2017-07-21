# ---- base stage with package.json ----
FROM node:6.11.1-alpine AS base
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/


# ---- build and test stage ----
FROM base AS build

# install prod deps and set aside node_modules
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm set progress=false && npm config set depth 0
RUN npm install --only=prod
RUN mv node_modules prod_node_modules

# install dev/test deps
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install

# run builds
COPY . /usr/src/app
RUN npm run build

# run unit tests
# npm test


# ---- release stage ----
FROM base

# copy *only* files needed for production
COPY --from=build /usr/src/app/prod_node_modules ./node_modules
COPY --from=build /usr/src/app/index.js ./index.js
COPY --from=build /usr/src/app/public/. ./public

CMD [ "npm", "start" ]