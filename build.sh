docker rm blog-app
docker build -t blog-app:1.0 .
docker run -d --rm --name -p 80:80 blog-app blog-app:1.0
