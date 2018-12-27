# build stage
FROM node:11.2.0-alpine as build-stage

# make the 'app' folder the current working directory
RUN mkdir app
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
ADD ./app/package*.json /app/
# install project dependencies
RUN npm install

ADD ./app /app

RUN npm run build

# production stage
FROM nginx:1.15.2-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

COPY ./config/nginx/nginx.conf /etc/nginx/
COPY ./config/nginx/jeecwebpage.conf /etc/nginx/conf.d/jeecwebpage.conf
RUN rm /etc/nginx/conf.d/default.conf

COPY ./config/nginx/ssl/cert.pem /etc/nginx/ssl/cert.pem
COPY ./config/nginx/ssl/key.pem /etc/nginx/ssl/key.pem

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
