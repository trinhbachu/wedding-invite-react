FROM nginx:alpine

# Xóa file mặc định của nginx
RUN rm -rf /usr/share/nginx/html/*

# Copy toàn bộ code HTML/CSS vào thư mục web root của nginx
COPY ./ /usr/share/nginx/html

# Expose cổng 80 bên trong container
EXPOSE 80
