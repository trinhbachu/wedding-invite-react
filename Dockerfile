FROM nginx:alpine
COPY ./index.html /usr/share/nginx/html/index.html

# Expose cổng 80
EXPOSE 8081/tcp

