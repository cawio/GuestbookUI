### STAGE 1:BUILD ###
FROM node:20-alpine AS build
WORKDIR /dist/src/app
RUN npm cache clean --force
COPY . .
RUN npm install
RUN npm run build

### STAGE 2:RUN ###
FROM nginx:alpine AS ngi
COPY --from=build /dist/src/app/dist/guest-book-ui/browser /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf
EXPOSE 80