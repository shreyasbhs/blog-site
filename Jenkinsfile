pipeline {
    agent any

     stages{
         stage("Install node"){
             steps{
                 sh("sudo yum install nodejs")
             }
         }
         stage('Run server'){
             steps{
              dir("${env.WORKSPACE/server}")
              sh("npm install")
              sh("node serverAPI.js")
             }
         }
         stage('Run client'){
            steps{
                dir("${env.WORKSPACE/client}")
                sh("npm install")
                sh("npm run build")
                sh("npm start")
            }
         }
     }
    
}