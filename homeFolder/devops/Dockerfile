FROM node:18.14.2-alpine3.16 as build

WORKDIR /root/app

# Copy only package*.json and .npmrc for installing packages
COPY /package*.json ./
COPY /.npmrc .npmrc

# Install and move the prod node_modules aside for the runtime
RUN npm ci --only=production
RUN cp -R node_modules prod_node_modules

RUN npm ci

COPY ./ .
RUN npm run rebuild

FROM node:18.14.2-alpine3.16 as runtime

# Working directory for the application
WORKDIR /usr/src/app

COPY ./ .

# Copy Prod Node_modules and final dist from Build layer
COPY --from=build  /root/app/prod_node_modules ./node_modules
COPY --from=build  /root/app/dist ./dist

ENV APP_NAME bank-service-ms
ENV DOMAIN banking
ENV SUB_DOMAIN core
ENV APP_PORT 8080
ENV ROOT_PATH 
ENV APP_INSIGHTS_INSTRUMENTATION_KEY NOT_A_VALID_INSTRUMENTATION_KEY
ENV APP_INSIGHTS_CONNECTION_STRING some secret connection string
ENV BUILD_ID 1
ENV WORKLOAD_ID 1
ENV WORKLOAD_NAME bank-service-ms
ENV READ-WRITE_DB_TYPE postgres
ENV READ-WRITE_DB_CONNECTION_STRING postgres://username:password@hostname:5432/database
ENV REDIS_CONNECTION_STRING localhost:6379
ENV REDIS_CONNECTION_STRING_KEY SOME_KEY

ENV NODE_ENV development

EXPOSE 8080

CMD ["node", "dist/index.js"]
