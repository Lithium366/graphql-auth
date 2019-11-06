FROM node:12.13-alpine as builder

WORKDIR /usr/app

COPY ./package*.json ./

RUN npm install

COPY . .

ENV NODE_ENV=production

RUN npm run build

FROM node:12.13-alpine

WORKDIR /usr/webapp

COPY --from=builder /usr/app/dist .
COPY --from=builder /usr/app/node_modules ./node_modules

ENV NODE_ENV=production

CMD ["node", "server/server.js"]
