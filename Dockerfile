FROM node:15
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

# 이하 도커나이즈 테스트

# FROM node:14
# ENV DOCKERIZE_VERSION v0.2.0
# RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
#     && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# RUN npm install -g nodemon
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app
# COPY package.json ./
# RUN npm install
# COPY . .

# RUN chmod +x docker-entrypoint.sh
# ENTRYPOINT ./docker-entrypoint.sh

# EXPOSE 3000

# 이하 배포욜 빌드파일

# # Step 1 : /**/*.ts -> *.js
# ## base image for Step 1: Node 10
# FROM node:10 AS builder
# WORKDIR /app
# COPY . .
# RUN npm install
# RUN npm run build


# # Step 2 : application start
# ## base image for Step 2: Node 10-alpine(light weight)
# FROM node:10-alpine
# WORKDIR /app
# ## Step 1의 builder에서 build된 프로젝트를 가져온다
# COPY --from=builder /app ./
# CMD ["npm", "run", "start:prod"]