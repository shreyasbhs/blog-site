pipeline {
    agent { label 'blog-node'}
    //    agent any
     stages{
       stage("build client"){
           steps{
           sh("chmod 777 build.sh")
        //    sh("")


          sh("./build.sh")
           }
       }
     }
    
}