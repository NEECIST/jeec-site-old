FROM node:9.11.1-alpine

# make the 'app' folder the current working directory
WORKDIR /vue_project

# copy both 'package.json' and 'package-lock.json' (if available)
COPY ./vue_project/package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY ./vue_project . .

# build app for production with minification
RUN npm run build

