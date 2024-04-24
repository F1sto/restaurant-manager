FROM node:20.12.2
LABEL authors="andreimisyurin"

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

COPY ./dist ./dist

CMD ["npm", "run"]
