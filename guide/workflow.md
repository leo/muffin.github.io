---
layout: page
title: Workflow
level: 2
---

Muffin itself is nothing more than a module that can be required within your web application. So when choosing a workflow when building a new site, you're technically not limited to a certain toolset.

However, we only want this to be a great argument for choosing muffin when it comes to building an app for which there's simply no other way than using a custom set of tools.

So when building a regular website, it's strongly recommended to do this using our neat [command line interface](https://github.com/muffin/cli){:target="blank"}. Using npm, you only need to run a single command to install it on your local device.

But before doing so, please [fix your npm permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions). This basically ensures that you don't need to prepend `sudo` when globally installing things through npm. After you're done, install the CLI:

{% highlight bash %}
npm install -g muffin
{% endhighlight %}

Awesome! Now can use our pre-made toolset to build websites using muffin. As an example, you can easily create a new site by running the following command:

{% highlight bash %}
muffin new
{% endhighlight %}

And boom, your new site is ready! Muffin not only generated the basic files for it, but it also inserted some sample data into your specified database. Isn't that cool as hell? No more downloading .zip files, unzipping them and moving their contents around.

To learn more about creating new sites using our toolkit, read [this](/guide/get-started).

## Builds

The CLI ships with [Broccoli](http://broccolijs.com){:target="blank"} as its build tool. Based on our experience, it's not just the fastest build tool out there, but it's also very easy to configure.

When generating a new site, each one contains a file called "brocfile.js" (it's recommended to keep the first letter small, but an uppercase one will also work). Within said file, you can specify all kinds of plugins that Broccoli will be using to build your assets.

You can find a list of all available plugins [here](https://www.npmjs.com/browse/keyword/broccoli-plugin){:target="blank"}.

When running the `muffin build` or `muffin serve -w` command, the command line interface will read the file and execute whatever you've specified within it.
