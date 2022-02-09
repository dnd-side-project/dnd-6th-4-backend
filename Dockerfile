FROM node:14
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
CMD [ "npm", "start" ]
EXPOSE 3000

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