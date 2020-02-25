## Vue Cli 3 base template 

I heared multiple times that Vue.js isn't optimal for large scale application development. My personal opinion is that it's because the lack of documentation. So I created this project with all the important presets which serve as a template to base larger Vue apps in it. I included some handy tools such as filters, cache, translations, custom overrides which can come handy... if you don't need them just delete them. Good luck with your project! :) :) :)

## Installation

Clone the repository to your local environment.
On the command line, navigate to the root folder inside the repository:

### Docker

### Project setup using Docker

Install [Docker](https://docs.docker.com/) with [Docker Compose](https://docs.docker.com/compose/).

Check docker-compose.yaml has been configured properly with enviroment variables. 

Run containers:
```
$ cd <projectRoot>
$ docker-compose up -d
```

To rebuild containers:
```
$ docker-compose up --build -d
```

### Project setup locally

Check defaults.sh has been configured properly with enviroment variables. 

Project setup (we need dependencies for the project and the server):
```
$ npm install
$ npm install --prefix ./server
```

Run env vars install:
```
$ cd <projectRoot>
$ source defaults.sh
```

Run application in dev mode:

(Compiles and hot-reloads for development)
```
$ cd <projectRoot>
$ npm run serve
```

Build application for production:
```
$ cd <projectRoot>
$ npm run build
```

Run in production:
```
$ cd <projectRoot>
$ npm run prod
```

Lints and fixes files:
```
$ npm run lint
```


docker build -f infrastructure/Dockerfile -t %docker-image-name%:$version .