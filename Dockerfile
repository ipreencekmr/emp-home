FROM node:16-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY dist ./

RUN npm install serve

CMD ["npx", "serve"]