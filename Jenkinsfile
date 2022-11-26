pipeline {
    agent { label 'blog'}
   
     options {
          
            skipDefaultCheckout()
        }
     stages{
        // stage("Explicit checkout"){
        //     steps{
                
        //     git branch: 'main', 
        //     credentialsId: 'shres',
        //     url: 'git@github.com:shreyasbhs/mpulse_test_site.git'
        //     sh("ls -lah")
        
        //     }
        // }
        stage("Initial build test"){
            steps{
                sh("echo Jenkins job build successfully!!!")
            }
        }
        stage("make a new directory"){
            steps{
                sh("cd /home/jenkins")
                sh("mkdir test")
            }
        }
     }
    
}