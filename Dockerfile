FROM node 
WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm ci --silent

COPY . ./

RUN npm run copy-assets
RUN npm start

ENTRYPOINT [ "npm", "start" ]
EXPOSE 1234
