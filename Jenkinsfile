pipeline {
    agent { label 'blog'}

     stages{
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