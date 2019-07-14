FROM node:alpine

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
COPY yarn.lock /app
RUN yarn

COPY . /app

EXPOSE 8081
CMD ["yarn", "start"]
