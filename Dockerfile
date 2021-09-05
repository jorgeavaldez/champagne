FROM node:14

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
COPY prisma ./prisma/

RUN yarn
RUN yarn prisma generate

COPY . .

RUN yarn next build

EXPOSE 3000
CMD [ "yarn", "next", "dev" ]
