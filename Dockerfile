# Common build stage
FROM node:lts-alpine3.15 AS common-build-stage

RUN addgroup -S nonroot && adduser -S nonroot -G nonroot

COPY src ./app/src

COPY tsconfig.json ./app

COPY package.json ./app

COPY swagger.yaml ./app

WORKDIR /app

RUN npm install --ignore-scripts

RUN npm run build

EXPOSE 3003

FROM common-build-stage AS production-build-stage

ENV NODE_ENV production

RUN chown -R nonroot:nonroot /app

RUN chmod 700 /app

USER nonroot

CMD ["node", "dist/server.js"]
