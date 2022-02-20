FROM node:slim
WORKDIR /app

COPY package.json .

RUN npm set registry 'http://185.213.175.212:4873/'

RUN npm install

ENV \
  NODE_ENV='development' \
  PORT=5001 \
  minio_accesskey='AKIAIOSFODNN7EXAMPLE' \
  minio_secretkey='wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY' \
  minio_endpoint='http://185.213.175.212:9000/'\
  minio_bucket='test'\
  minio_encryptionKey='jhL4qpnhqpuJq5VENASWtFVylscVjZHX'\
  dbhost='object-registry-writer-db'\
  dbport=3306\
  dbname='object-registry'\
  dbuser='root'\
  dbpassword='magcentre'\
  JWT_SECRET='5avo57Ive6RawrejEspow0prO6risl' \
  API_GATEWAY='http://api-gateway-service:5000'
  

COPY . .

EXPOSE 5001

CMD [ "node", "src/index.js" ]
