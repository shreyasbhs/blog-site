pipeline {
    agent { label 'blog'}
    //    agent any
     stages{
       stage("build client"){
           steps{
        //    sh("chmod 777 build")
        //    sh("")


          sh('''
          #!/bin/bash
            docker rm blog-app
            docker build -t blog-app:1.0 .
            docker run -d --rm -p 80:80/tcp --name  blog-app  blog-app:1.0
          ''')
           }
       }
     }
    
}