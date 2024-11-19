<img src="https://brambeekman.dev/assets/favicon/favicon.svg" width="60">

# Craft CMS 5 Bootstrap Vite Boilerplate

This is a [Craft CMS 5.x](https://github.com/craftcms/cms) boilerplate [Made by Bram Beekman](https://brambeekman.dev) use internally for projects, that I open sourced so anybody can use it.
Inspired by [MadeByShape](https://github.com/madebyshape/craft-cms) TailwindCSS Vite Starter.

## The Stack

- [Craft CMS 5.x](https://craftcms.com) Content management system
- [DDEV](https://ddev.com) Local development environment
- [Vite 5.x](https://vitejs.dev) Front end build tool with HMR
- [Bootstrap 5.x](https://getbootstrap.com/) Frontend toolkit

## Requirements

- [Docker](https://www.docker.com)
- [DDEV](https://ddev.com)

## Plugins

### Craft CMS

- Vite
- Minify
- CKEditor
- Navigation

## Install

Create an empty folder and CD to it in terminal.

### Option 1: Git

You can clone the repo from Github using Git CLI:

```shell
git clone https://github.com/beekmanbram/craft-cms-boilerplate.git .
```

### Option 2: Manual

Download a copy of this repo to your computer using the `Code` button above, and choosing `Download ZIP`. Move these files to your empty folder.

### 2. Start DDEV, Install Craft CMS and dependencies

Firstly, edit `.ddev/config.yaml` and change the `name` to your project name.

Then, there are a few CLI commands ([See more](#cli-commands)) I've created that allow starting DDEV, installing Craft CMS and installing dependencies. The one to get you started:

```shell
make install
```

### 3. Starting Vite

Once you've followed step 2 and it's successfully ran through the steps, you'll need to start Vite which allows you to start using front end tooling:

```shell
make dev
```

## CLI commands

I've created a few commands to make development easier. All these commands are ran in terminal:

| Command | Description |
| -------- | ------- |
| `make install` | Starts DDEV, Install Craft CMS and dependencies. |
| `make dev` | Starts Vite development process. |
| `make prod` | Run on production to start Vite build process - minify, compress etc. |

## Nice to know

### Database

To access the database inside the DDEV environment, you can use TablePlus. You can use the following command to open TablePlus to export/import:

```shell
ddev tableplus
```

### Exiting Vite

One thing that confused me in side the terminal was how to exi Vite once running a CLI command like `make dev`. You can't use `ctrl + c` like you would in a normal terminal. You need to use:

```shell
q + enter
```

### HTTPS recommended

There is a few issues getting Vite, DDEV and Craft CMS running nicely together over HTTP, so always make sure you are using HTTPS. For DDEV just run:

```shell
ddev stop --all
mkcert -install
ddev start
ddev launch
```
