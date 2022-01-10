FROM node:17-alpine3.14

WORKDIR /app

COPY package.json .

RUN npm set registry 'http://185.213.175.212:4873/'

RUN npm install

COPY . .

EXPOSE 5001

CMD [ "node", "src/index.js" ]
