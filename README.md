# Docker Default Template

## Introduction

> Use this repo to easily replicate a VVV environment, without the VVV hassle. 

## Code Samples

> **MariaDB** 10.5.8

> **Adminer** 4.8.0 ( db management - comparable to phpMyAdmin)

> **Wordpress**
- php 7.4 - FPM (to use with nginx)
- Alpine to keep bundle size low

**OR**

- latest (see docker-compose-no-nginx.yml for standalone version without fpm/nginx)

> **Nginx**: latest - Alpine

## Installation

- Get [Docker Desktop](https://www.docker.com/products/docker-desktop)
- Get VSCode's [Docker extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
- Clone this Repo and select the docker-compose file that is right for you
- Modify ports, default theme/plugins, wordpress table prefix, etc. as needed
- Right click on docker-compose.yml -> Compose Up
- The auto-imported database is a fresh post-installation sample with admin/password credentials


### The installation becomes available on http://localhost:8080 

This repo assumes the need for Browser-sync. When using WordPress without FPM/Nginx, see docker-compose-no-nginx.yml in this repo (works with browser-sync as well). 
If Browser-sync is not needed, do the following via the docker compose file:

- Comment out or remove the Nginx image
- Change _wordpress:php7.4-fpm-alpine_ to just _wordpress_, and uncomment the _port_ & _- 8000:80_
- Change the _db_ volume from _wordpress-port-8080.sql.gz_ to _wordpress-port-8000.sql.gz_, **OR** change the port to _- 8080:80_ on the WordPress image (see above)