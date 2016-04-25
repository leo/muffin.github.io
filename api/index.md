---
layout: page
title: API
level: 1
---

Muffin not only provides you with a neat workflow for building unique websites, but it also exposes all middleware directly to you, so that it doesn't require much work to fully customize how it runs on your server.

When generating a new site using muffin's [CLI](https://www.npmjs.com/package/muffin-cli), you'll be presented a tiny example of how this works.

## Loading muffin

First of all, you need to require the local instance of muffin and assign it to a variable or constant:

{% highlight js %}
const app = require('muffin')
{% endhighlight %}

Next, you can assign all of the existing front-end routes to another constant, so that you're able to modify them or add more later:

{% highlight js %}
const router = app.router
{% endhighlight %}

Since muffin uses [Koa](http://koajs.com) as web framework, there's a whole bunch of things you can do within those routes. To learn more about what exactly can be done within them and what you need to consider when adding more of them, make sure to read [this](http://koajs.com/#application).

As the next step, feel free to do whatever you want within those routes. You can load special kinds of data, pass it around or even override existing routes.

## Adding middleware

Every developer has a slightly different definition when it comes to middleware. But when talking about muffin, the terms refers to functions that are doing some kind of work each time a request comes in.

As an example, here's a small route containing a middleware that logs a certain message to the console each time someone visits the home page of your site:

{% highlight js %}
router.get('/', async(ctx, next) => {
  console.log('Home visited!')
  await next()
}))
{% endhighlight %}

But that's of course not the limit! As mentioned above, muffin is simply using [Koa](http://koajs.com) behind the curtains. Because of this, you can take advantage of the whole ecosystem that it has to offer.

Not just in educational terms (you'll easier find answers to your questions on the web), but also when it comes to extending your existing middleware with [pre-built ones](https://github.com/koajs/koa/wiki). So go, make something awesome with those!

## Telling muffin about the middleware

By adding custom middleware within your site, you're only extending the so-called "Front Router". An object that is being exposed by muffin and that already contains a few default routes for processing your data and showing the visitor some content.

**For example:** When generating a new site using `muffin new`, you'll already get a working site, although there aren't any routes configured within `index.js` (except the example shown above).

That's only the case because muffin ships with some default routes behind the curtain that are doing some basic work. And by adding more middleware to the index file, you can extend and override those to create an awesome site!

So back to the main thought:

Since you're doing nothing more than extending an object which muffin doesn't yet now of, you need to tell it about it by calling the `.run` method and passing it the router as the first parameter:

{% highlight js %}
app.run(router)
{% endhighlight %}

**That's it!** 🤘 Above this line, you can do whatever you want with the router until you have a working website that meets your requirements.

### Not the end, however!

While the upper information allows you to understand the basic concept behind our API, it's definitely just the beginning. For the future, we're planning to release a full-blown documentation that lists all exposed methods and properties and what you can do with them.
