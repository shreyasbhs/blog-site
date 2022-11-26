pipeline {
    agent { label 'blog'}
    //    agent any
    //  options {
          
    //         skipDefaultCheckout(true)
    //     }
     stages{
       stage("build client"){
           steps{
           sh("source build.sh")
           }
       }
     }
    
}