#!/bin/bash

set -e # Exit script immediately on first error.
export TOKEN=$1 # Github token
export USERNAME=$2 # Github username
export NAME="docker_node" # Docker image name

# Check the number of arguments
if [ $# -ne 2 ]; then
    echo "Usage: Not enough arguments. Please enter the token and username."
    exit 1
fi

# Functions
echo "Checking all the dependencies are installed..."

installed(){
    command -v "$1" >/dev/null 2>&1
}

# Check Docker
if ! installed docker; then
    echo "Docker is not installed. Please install docker first."
    exit 1
else 
    sleep 3
    echo "Docker is installed."
fi

# Login Docker
echo "Login Docker..."
echo $TOKEN | docker login ghcr.io --username $USERNAME --password-stdin 

# Build Docker
echo "Building Docker..."
docker build -t ghcr.io/$USERNAME/:$NAME:latest .

# Push Docker
echo "Pushing Docker..."
docker push ghcr.io/$USERNAME/:$NAME:latest

