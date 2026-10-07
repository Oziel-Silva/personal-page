FROM nginx:alpine

ARG VERSION=dev

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html /usr/share/nginx/html/index.html
COPY profile.jpg /usr/share/nginx/html/profile.jpg
COPY favicon.ico /usr/share/nginx/html/favicon.ico

RUN sed -i "s/__VERSION__/${VERSION}/" /usr/share/nginx/html/index.html && \
    chmod 644 /usr/share/nginx/html/index.html && \
    chmod 644 /usr/share/nginx/html/profile.jpg && \
    chmod 644 /usr/share/nginx/html/favicon.ico

EXPOSE 3000
