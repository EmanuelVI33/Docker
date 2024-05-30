# docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 \
#    -t 141102/cron-ticker:latest --push .

# /app /usr /lib
# FROM --platform=linux/amd64 node:19.2-alpine3.16
# FROM node:19.2-alpine3.16

# Dependencias
FROM node:19.2-alpine3.16 as deps
WORKDIR /app
COPY package.json ./
RUN npm install


# Construcion
FROM node:19.2-alpine3.16 as buildier
WORKDIR /app
# Copiamos desde el stage deps los modulos de nest 
#      stage       dir                copiar en
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run test


# dependencias de producion
FROM node:19.2-alpine3.16 as prod-deps
WORKDIR /app
COPY package.json ./
RUN npm install --prod


# Ejecutar app
FROM node:19.2-alpine3.16 as runner
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY app.js ./
COPY tasks/ ./tasks
CMD [ "node", "app.js" ]