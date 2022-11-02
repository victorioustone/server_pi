FROM node:12.9.0
WORKDIR /app
COPY package.json /app
RUN yarn install
COPY . /app
CMD npm start
EXPOSE 4000