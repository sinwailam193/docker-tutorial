FROM node:alpine as builder

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY package.json /app
COPY yarn.lock /app
RUN yarn

# Bundle app source
COPY . /app

RUN yarn build

FROM nginx

COPY --from=builder /app/build /usr/share/nginx/html
