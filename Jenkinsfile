pipeline {
    agent any

     stages{
         stage("Install node"){
             step{
                 sh("sudo apt install node")
             }
         }
         stage('Run server'){
             step{
              dir("${env.WORKSPACE/server}")
              sh("npm install")
              sh("node serverAPI.js")
             }
         }
         stage('Run client'){
            step{
                dir("${env.WORKSPACE/client}")
                sh("npm install")
                sh("npm run build")
                sh("npm start")
            }
         }
     }
    
}