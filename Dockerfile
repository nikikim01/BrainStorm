FROM hhvm/hhvm-proxygen:latest

# set working directory to root of project
WORKDIR /BrainStorm

# install Node.js and npm
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - 
RUN apt-get install -y nodejs
RUN curl -SL https://github.com/docker/compose/releases/download/v2.27.1/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose

RUN curl https://raw.githubusercontent.com/hhvm/hhast/master/.hhconfig > .hhconfig


# Copy the current directory into the container at /BrainStorm
COPY . /BrainStorm

# install necessary composer
COPY --from=composer/composer:latest-bin /composer /usr/bin/composer
# Set up composer in the hackAR directory to keep dependencies specific to hackAR here
WORKDIR /BrainStorm/hackAR

RUN composer require hhvm/hsl hhvm/hhvm-autoload
RUN composer require --dev hhvm/hhast hhvm/hacktest facebook/fbexpect
# Run any needed packages specific in package.json
RUN npm install


EXPOSE 1234

# CMD ["hhvm", "-m", "server", "-p", "1234", "-v", "Server.SourceRoot=/BrainStorm", "-vServer.AllowRunAsRoot=1"]