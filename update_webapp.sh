#!/bin/bash

# Get most recent code
git pull
git checkout beta

# Update docker services
docker-compose down
docker-compose build
docker-compose up -d

# Echo
echo "All done :)"
