pipeline {
    agent { label 'blog'}
    //    agent any
     stages{
       stage("build client"){
           steps{
           sh("chmod +x build.sh")
           sh("./build.sh")
           }
       }
     }
    
}