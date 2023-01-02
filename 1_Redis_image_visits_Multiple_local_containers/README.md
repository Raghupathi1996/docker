# SRead ME

 - This docker file is been designed in the way the the image is been built in an optimized way. Any change in the index.js file, the image has to be re-built with the dependencies not being re-generated. 
 - The copy of other file happens only after npm install - installing dependencies. The dependencies are re-installed only if the package.json file is been changed.

 ## Connection of two containers

 Can be done in two ways -
 1. Using docker CLI (not encouraged).
 2. Using docker Compose 

 ## Docker compose up 
 - Docker compose up -> Just creates the container from the existing image
 - Docker compose up --build -> creates the container after building the image again from the dockerfile

 ## commands

 - docker build -d <image name or image id>
 - docker compose up -d   -> creates the container or image in the background
 - docker compose down  -> stops the container network and volumes.

 ## Restart policy
 - "no" -> the container does not restart
 - always -> irrespective of the reason the docker restarts
 - on-failure -> only restart if the container stops with the error code ( error other than 0)
 - unless-stopped -> Always restart unless we forcibly restarts

 ## docker compose ps
  - it list out the running container associated with the docker compose file found in the directory the command was initiated.

## docker command to dynamically read the changes done in the local to the container 
- docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app  <imageID>

: `-v /app/node_modules` -> puts a bookmark on the node_modules folder, we are marking the folder a place holder within the container, and don't map this folder with the repo
: `-v $(pwd):/app` -> maps the pwd into the ./app folder


## docker test shortcoming
 - the p, q, w option doesn't work if the both the build and test are run as a different services or container