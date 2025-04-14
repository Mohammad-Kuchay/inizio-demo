FROM node:18.14.2-alpine3.16

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

COPY ./ .
RUN npm ci

RUN npm run rebuild

ENV PORT 8080
ENV NODE_ENV development
ENV ROOT_PATH /
ENV BUILD_ID 1
ENV DOMAIN localhost
ENV SUB_DOMAIN docker
ENV WORKLOAD_ID 1
ENV WORKLOAD_NAME docker

EXPOSE 8080
CMD ["node", "/app/dist/index.js"]
