# Setting up hhvm on (windows)[https://medium.com/@mikeabelar/web-development-with-hhvm-and-hack-getting-setup-with-windows-a046ac09603a]

- initially set up using ubuntu but Srishti mentioned she didn't have to use linux to work with hhvm so pivoting to using docker (which actually is also using linux...)

1. open Docker Desktop

2.

```shell
  docker pull hhvm/hhvm
```

3. build image from root with created `Dockerfile`
   `docker build -t brainstorm_image .`

4. Run HHVM Docker Container

````shell
docker run -it -p 1234:1234 brainstorm_image
```
````
