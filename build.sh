sudo docker rm blog-app
sudo docker build -t blog-app:1.0
sudo docker run -d --rm --name -p 80:80 blog-app blog-app:1.0
