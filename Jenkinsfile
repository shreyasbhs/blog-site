pipeline {
    agent { label 'blog'}
    //    agent any
     stages{
       stage("build client"){
           steps{
           sh("chmod 777 build")
           sh("./build")
           }
       }
     }
    
}