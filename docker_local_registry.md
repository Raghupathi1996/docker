# Docker Local Registry

## Basic docker command
1. _docker images_ -  lists the list of images in the local system
2. _docker pull_ - pull the image into the local system from the repository




## Example to create a local registry

1. *docker run -d -p 5000:5000 --restart=always --name registry -v $(pwd)/docker-registry:/var/lib/registry registry:latest*   - creates a image with the name registry and image as registry:latest with the volumes mapped form the local registry $(pwd)/docker-registry to the images /var/lib/registry.
2. *curl -X GET http://192.168.45.8:5000/v2/_catalog*     -  checks out the registry repository at the endpoint 192.168.45.8:5000 with the docker registry servies has to be active 
3. *docker tag nginx 192.168.45.8:5000/nginx*     - the new image called 192.168.45.8:5000/nginx is created which is tagged with nginx property.
4. *docker push 192.168.45.8:5000/nginx*     - this pushes the image nginx to the location 192.168.45.8:5000. but since the location sends HTTP response this command will fail. Get "https://192.168.45.8:5000/v2/": net/http: request canceled while waiting for connection (Client.Timeout exceeded while awaiting headers)
5. *sudo vim /etc/docker/daemon.json*     - place to list the connection characteristics.
6.  *{*
        *"insecure-registries":["192.168.45.8:5000"],*
        *"experimental" : false*
*}*    - add this set of lines in the daemon.json
7. *systemctl stop docker* - to stop the docker demon
8. *systemctl start docker* - to start the docker demon
9. **step and 8 and 9** are passed to restart the docker demon. 
10. retry the **step4**. - now the images is been to the local repository
11. Now the image can be pulled from the local repository.
12. The image pushed in the local repository can be accessed from the other node as well by setting the insecure connection of **step5** and pass the pull command.