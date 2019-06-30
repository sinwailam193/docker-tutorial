# docker-tutorial

## Docker commands:

To remove unused images (option -a, all):
```docker system prune [-a]```

To build with tag name:
```docker build -t [image name] ./```

To build container from a image and mapping the ports:
```docker run -p 8080:8080 [image-name]```

To get inside the terminal of a image:
```docker run -it [image-name] bash```

To get inside the terminal of a running container:
```docker exec -it [container-id] bash```

To run a container that has exited in background:
```docker start [container-id]

# For Docker Compose

Similar to docker run image (--build for re building the image)
(-d is for running it in the background)
```docker-compose up [--build] [-d]```

stop containers
```docker-compose down```
