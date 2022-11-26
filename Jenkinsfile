pipeline {
    agent { label 'blog'}
    //    agent any
     stages{
       stage("build client"){
           steps{
           sh("bash build.sh")
           }
       }
     }
    
}