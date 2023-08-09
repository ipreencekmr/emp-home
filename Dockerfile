FROM node:16-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY dist ./dist/

COPY server.js ./

RUN npm install express

CMD ["node", "server"]