FROM hhvm/hhvm-proxygen:latest

# set working directory to root of project
WORKDIR /BrainStorm

# Copy the current directory into the container at /BrainStorm
COPY . /BrainStorm

# Run any needed packages specific in package.json
RUN npm ci

EXPOSE 80