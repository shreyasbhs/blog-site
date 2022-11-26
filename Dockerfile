FROM node
LABEL maintainer="Shreyas Bharadwaj <shreyas.bhs@gmail.com>"
RUN mkdir -p /opt/blog-app/
COPY . /opt/blog-app
WORKDIR /opt/blog-app/client
RUN npm run build
EXPOSE 80/tcp
ENTRYPOINT npm start

