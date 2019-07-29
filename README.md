# docker-tutorial

## Docker commands:

To remove unused images (option -a, all):
```docker system prune [-a]```

To build with tag name:
```docker build -t [image name] ./```

To build with Dockerfile.dev
```docker build -f Dockerfile.dev -t [image name] .```

To run the app and using volume for live file update:
```docker run -p port:port -v /app/node_modules -v $(pwd):/app [image name | image id]```

To build container from a image and mapping the ports:
```docker run -p 8080:8080 [image-name]```

To get inside the terminal of a image:
```docker run -it [image-name] sh```

To get inside the terminal of a running container:
```docker exec -it [container-id] sh```

To get inside the terminal of a running container and execute other command:
```docker exec -it [container-id] yarn test```

To run a container that has exited in background:
```docker start [container-id]```

# For Docker Compose

Similar to docker run image (--build for re building the image)
(-d is for running it in the background)
```docker-compose up [--build] [-d]```

stop containers
```docker-compose down```
