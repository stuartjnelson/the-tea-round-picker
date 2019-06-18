## Setting Up Ready Vue Boilerplate

This project sets itself up using a bash script. For a basic guide to bash script read (http://matt.might.net/articles/bash-by-example/)[this guide].


1. Close down the boilerplate into a new directory.

2. Cd into the boilerplate directory `cd ready-vue-boilerplate`

3. Delete the `.git` directory from inside `/ready-vue-boilerplate`

4. Run the Bash script that will create a new Vue project using Vue CLI by running `./.vue-boilerplate-setup`. You will be asked `Generate project in current directory? (Y/n)`, respond with `Y`.

The settings for scaffolding the project using the Vue CLI are in `bash-script-scaffolding/.vue-cli-template.json`. You will need to have [Vue CLI installed globally on your computer](https://cli.vuejs.org/guide/installation.html), I suggest using Yarn for this as thats the package manager use in the bash script. It will then install some dependencies that our frontend boilerplate/vue setup required. The bash script will also clone down our Frontend Boilerplate and put it in the correct place in the Vue project. It copies over some basic Vue files from `ready-vue-files`.


## Updating Ready Vue Boilerplate

* If you need the boilerplate to install any new `devDependencies` add them to `bash-script-scaffolding/.vue-cli-template.json` inside the plugins object.
* Updating any of the following files needs to be done inside [Ready Frontend Boilerplate](https://bitbucket.org/ReadyProjects/ready-frontend-boilerplate/) repo
  * `/src/assets/*`
  * ES Lint files
  * Stylelint files