---
layout: page
title: Deployment
level: 2
---

We currently recommend &#120491; [now](https://zeit.co/now) for deploying your site. While there might be other great solutions out there, this is by far the best one (based on our experience with hundreds of different hosters).

The following paragraphs will explain how to use the service to deploy a site built using muffin by running just a few commands.

## Setup

Please follow the steps provided on [this page](https://zeit.co/now#get-started) to prepare &#120491; now for handling the deployment.

We're also going to assume that there's a database running somewhere that contains the content of your site. Since there are services like [MongoLab](http://mongolab.com), setting it up will just take a few seconds.

## Deploying

As the first step, make sure to open the command line and go to the directory that contains your site. Within that folder, start the deployment:

{% highlight bash %}
$ now
{% endhighlight %}
