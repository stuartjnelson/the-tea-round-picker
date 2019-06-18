# READY FRONTEND BOILERPLATE

This is our frontend boilerplate that is used across all projects that need frontend code. Currently is uses [Webpack](https://webpack.js.org/guides/getting-started/) as the build tool. If you have any bugs/updates/improvements you'd like to make first check the [Issue Tracker](https://docs.google.com/spreadsheets/d/1iIvNRNr3R38j56Tsa45x1MqNfC9itut_7Yr21Pdz_OQ/edit#gid=0).



## First Time Installation
-   You will need to ensure you have yarn installed globally. The best way to do this is using [Brew](https://brew.sh/), `brew install yarn`
-   Then install Parcel.js globally `yarn global add parcel-bundler`



## Setup
-   Run `yarn install` to install dependancies
-   Rename `.env.example` to `.env`. Update the `LOCALHOST` value including port to your projects hostname eg `http://ready-febp.local:81`.
-   To run the site locally type `npm run dev` into your terminal


### Setup for compiling assets only
If you _only_ need your assets to be compiled using Parcel (eg. you are using the boilerplate with WordPress) then you will need to update a few things.

1.  Directly reference the compiled JavaScript file, `<script src="assets/dist/main.js" charset="utf-8"></script>`
2.  Include the compiled CSS file `<link rel="stylesheet" href="assets/dist/main.css">`
3.  Have your Parcel commands entry point to be your `main.js` file. This has been setup in `package.json` for both _dev_ & _build_ tasks. These tasks have been prefixed with `_devAssetsOnly`.




## Building For Production
-   To build the site type `npm run build` into your terminal. Most likely that your build tool will do this for you, you'd only need to do this if you are manually deploying the website.
