FROM nginx:1.23.3-alpine

ENV NGINX_ENVSUBST_OUTPUT_DIR=/etc/nginx/

COPY ./docker/main/env.js.template /etc/nginx/templates/
COPY ./docker/main/default.conf /etc/nginx/conf.d
COPY ./dist/ /etc/nginx/html/

EXPOSE 80