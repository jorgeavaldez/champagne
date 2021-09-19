FROM node:14

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
COPY prisma ./prisma/

RUN yarn
RUN yarn prisma generate

COPY pages ./pages/
COPY public ./public/
COPY src ./src/
COPY styles ./styles/
COPY babel.config.js ./
COPY next-env.d.ts ./
COPY next.config.js ./
COPY tsconfig.json ./

RUN yarn next build

EXPOSE 3000
CMD [ "yarn", "next", "dev" ]
