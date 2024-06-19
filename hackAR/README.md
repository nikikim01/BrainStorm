# Setting up hhvm on (windows)[https://medium.com/@mikeabelar/web-development-with-hhvm-and-hack-getting-setup-with-windows-a046ac09603a]

## Set up composer

`composer init` in the `hackAR` directory

## Create an `.hhconfig` file and `tests` subdirectory

### Configure autoloading

1. add `hhvm-autoload` that allows hhvm to map where the files are

```bash
    php /path/to/composer.phar require hhvm/hhvm-autoload
```

2. Configure its `hh_autoload.json`

```json
{
  "roots": ["src/"],
  "devRoots": ["tests/"],
  "devFailureHandler": "Facebook\\AutoloadMap\\HHClientFallbackHandler"
}
```
