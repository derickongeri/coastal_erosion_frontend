#!/bin/bash

# This script automatically builds the quasar projec, stages, commits and pushes code to a remote repository on Github.
quasar build

# Define the remote repository URL
REPO_URL="https://github.com/derickongeri/coastal_erosion_frontend.git"

# Get commit message from command line argument
COMMIT_MESSAGE="$1"

# Check if the commit message was provided
if [ -z "$COMMIT_MESSAGE" ]; then
  echo "Please provide a commit message as an argument."
  exit 1
fi

# Stage changes
echo "Adding files..."
git add .

# Commit changes with the provided commit message
echo "Commiting changes..."
git commit -m "$COMMIT_MESSAGE"

# Push changes to remote repository
echo "Pushhing to github..."
git push $REPO_URL main

# deploying to dev server
# scp -r /home/derick/Desktop/rcmrd-coastal/Frontend/rcmrd_coastal_spa/dist/spa/* root@45.76.143.229:/usr/share/nginx/html/dashboard/

# REMOTE_USER="cgsdadmin"
# REMOTE_HOST="217.21.122.249"

# deploying to dev server
scp -r /home/derick/Desktop/coastal_erosion_frontend/dist/spa cgsdadmin@217.21.122.249:/home/cgsdadmin/frontend

# # sudo rm -rf /var/www/html/cogeos_app/
# # sudo cp -r dist/spa /var/www/html/cogeos_app

