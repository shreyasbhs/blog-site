pipeline {
    agent { label 'blog'}
    //    agent any
     stages{
       stage("build client"){
           steps{
           sh("source build.sh")
           }
       }
     }
    
}