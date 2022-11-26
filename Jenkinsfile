pipeline {
    agent { label 'blog'}
    //    agent any
    //  options {
          
    //         skipDefaultCheckout(true)
    //     }
     stages{
       stage("build client"){
           step{
           sh("source build.sh")
           }
       }
     }
    
}