FROM node:6.11

ENV APP_HOME /google-map-prototype

RUN mkdir $APP_HOME
WORKDIR $APP_HOME

ADD package.json $APP_HOME
RUN npm install

ADD . $APP_HOME
