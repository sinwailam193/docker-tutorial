# docker-tutorial

## Docker commands:

To remove unused images (option -a, all):
```docker system prune [-a]```

To build with tag name:
```docker build -t sinwailam193/simple-web ./```

To build container from a image and mapping the ports:
```docker run -p 8080:8080 simple-web```

To get inside the terminal:
```docker run -it simple-web bash```

To run a container that has exited:
```docker start [container-id]
