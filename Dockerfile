FROM node:lts-alpine AS build

WORKDIR /knowly
COPY . .
 
RUN npm install
RUN npm run build

FROM nginx:alpine



COPY --from=build /knowly/dist/ /usr/share/nginx/html 
