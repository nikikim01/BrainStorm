# Setting up hhvm on (windows)[https://medium.com/@mikeabelar/web-development-with-hhvm-and-hack-getting-setup-with-windows-a046ac09603a]

- initially set up using ubuntu but Srishti mentioned she didn't have to use linux to work with hhvm so pivoting to using docker

1. open Docker Desktop
2.

```shell
docker pull hhvm/hhvm
```

3. Run HHVM Docker Container

```shell
docker run -tt --interactive -v /c/Users/nicole.kim/source/repost/Brainstorm/hackAR:/hackAR hhvm/hhvm:latest bash
```

to mount the hackAR directory from the host machine to the /hackAR directory inside the Docker container

4. Build a Docker img for a website:
   a) Create Dockerfile

## Set up composer

`composer init` in the `hackAR` directory

## Create an `.hhconfig` file and `tests` subdirectory

### Configure autoloading

1. add `hhvm-autoload` that allows hhvm to map where the files are

```shell
    php C:\composer\composer.phar require hhvm/hvvm-autoload
```

2. Configure its `hh_autoload.json`

```json
{
  "roots": ["src/"],
  "devRoots": ["tests/"],
  "devFailureHandler": "Facebook\\AutoloadMap\\HHClientFallbackHandler"
}
```
