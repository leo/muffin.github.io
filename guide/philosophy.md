---
layout: page
title: Philosophy
---

This page explains the core concepts behind muffin. Besides of that, it also serves as some kind FAQ sheet to answer some of the questions most developers often wonder about when using it.

## So... what's this about?

Easy: Muffin takes the essence of the brilliant idea that brought us content management systems like WordPress, Kirby, Typo3 and Drupal and merges it with the latest technologies and tools that the web has to offer today.

The current market in this area is far from perfect. People keep struggling with spaghetti code, quirky build & deployment workflows, cluttered dashboards, weird caching mechanisms and uncompressed contents.

Muffin solves all of this by taking advantage of the thriving ecosystem JavaScript and Node.js currently have to offer:

## JavaScript

Since Muffin is written in pure JavaScript (using Ember.js) and run on Node.js, you’ll also finally be able to take advantage of a much faster content delivery, build tools like Grunt & Gulp and all other packages available within the JavaScript universe.

### Hello, flat directory structures!

This also has many other advantages: For example, Muffin acts as a simple module that will be part of your site's dependencies. This basically means that your template files will be located in the root directory. So all in all, you won't have to dig 10 folders deep into your folder structure anymore, just to reach it (or your plugins).

### Built-in webserver

Another great thing that comes with the use of the Muffin is the abilitiy to finally say "goodbye" to `php.ini`, `.htaccess` and differently configured webserver setups. Muffin comes with its own JS webserver built-in, so there's no need to waste your time endlessly configuring upload limits, max. execution times, webserver modules or stupid RewriteRules.

You also don't need to install things like `mod_deflate.c` or `mod_expires.c` and then setup quirky `.htaccess` rules, just to compress your responses or to set the correct expiration date for certain media files. Muffin already internally handles all of this stuff for you. Just lean back and focus on writing a great website!

## Document-oriented database

By using [MongoDB](https://www.mongodb.org/){:target="blank"} for storing your data, we make sure to both store your content in a carefully structured way and serve it in the blink of an eye. Besides that, it also allows you to take advantage of all those special features MongoDB has to offer.

Since all data is already structured in BSON objects (basically binary-encoded JSON documents), it's very straightforward to output them as such. This means that you can easily export your whole DB as a single JSON file. Since it's really just JSON, the file can now either be re-imported into a different DB, or even loaded into a simple JS script (without a library), if you want to iterate over your data.

### GridFS

Do you remember the times when you had to make sure that all folder and file permissions are configured correctly, just to make sure your media files are stored?

Forget that! Muffin uses [GridFS](https://docs.mongodb.org/manual/core/gridfs/){:target="blank"} to split all of your uploaded files into small 255 kB chunks and save them to the DB (not the code, of course). When a request for a file comes in, the chunks will be taken from the DB and then [streamed](http://maxogden.com/node-streams.html){:target="blank"} directly to the response.

A nice side-effect of this whole feature is that you don't need to download an "uploads" folder or such stuff when setting up your local development environment. **Just copy the DB!**

## Made for uniqueness

Muffin neither comes with a built-in theme registry nor something similar. The only way to extend its functionality will be by hooking up to its API when writing a site with it, or by using one of the plugins that will be released on [npm](https://www.npmjs.com/){:target="blank"}.

All in all, this will create a much cleaner experience for your customers. Not only because those plugins are strictly limited when it comes to the extension of the UI, but also because the open source community will focus on sharing so-called "boilerplates" instead of entire themes.

Each boilerplate comes with a different build system and preprocessor. Either choose the one you like the most, use the default one, or just create your own! By the way, the default one comes with Gulp, Sass, Babel and built-in live reloading.

## Farewell, spaghetti code

Since the app ships with [Handlebars](http://handlebarsjs.com/){:target="blank"} as its default templating engine, you’ll finally be able to enjoy the beauty of completely logic-less templates and the clean code that comes with them. All of your helpers and functions will be located in a separate file.
