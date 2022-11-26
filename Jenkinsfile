pipeline {
    agent { label 'blog'}
    //    agent any
    //  options {
          
    //         skipDefaultCheckout(true)
    //     }
     stages{
       stage("build client"){
           sh("source build.sh")
       }
     }
    
}