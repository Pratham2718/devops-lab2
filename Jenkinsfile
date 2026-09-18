pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out project...'
            }
        }

        stage('Build') {
            steps {
                echo 'Building application...'
                sh 'docker build -t devops-lab2:v2 .'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                echo 'Deploying application to Kubernetes...'
                sh 'kubectl apply -f deployment.yaml'
            }
        }

        stage('Verify Deployment') {
            steps {
                echo 'Checking Kubernetes deployment...'
                sh 'kubectl get deployment'
                sh 'kubectl get pods'
            }
        }
    }
}
