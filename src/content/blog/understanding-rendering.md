---
title: "Understanding Rendering: SSR, CSR, and SSG"
description: Exploring the different approaches to rendering web pages - server-side rendering, client-side rendering, and SSG - and how they impact user experience.
pubDate: Jan 06 2022
heroImage: /yoga.jpg
---

When the internet is slow, we open up Instagram to see a page like this:

*[Image placeholder: When the network is lagging, only showing frames and templates]*

Why would some information come out faster than others when the internet is equally bad? The like button loads up fast, but it takes a long time to react when we "like" them.

*[Image placeholder: Mobile phone perspective showing a person frantically tapping the screen repeatedly with text "tap tap tap". The like button has a protective shield and looks indifferent, wearing glasses]*

This brings us to a deeper question: **Why is the loading of data and the website not aligned?**

## The Real Problem

In the last article, we talked about the procedure model:

**Source → Storage → Render → Delivery → Presentation**

We said that a website does not start as HTML. It only becomes HTML at the rendering stage. So what we are actually seeing here is not a "slow internet" problem.

**It's a rendering problem.**

> **Aha moment**: The data and HTML come out at different times!

So the fundamental question is: **Where and when are the data and UI combined into HTML?**

Different approaches to rendering create different user experiences. So today, let's talk about the ways data comes together to form the final apps and websites we use.

> **Note**: The rendering can be triggered by the author or the user's change. Essentially they are the same as they ask for a change in the contents of the webpage.

---

## 1. SSR - Server-Side Rendering

The server has combined the data and the UI, generating a complete HTML page, and then delivers the software to the local browser. Every time the user makes a request by clicking, refreshing, or navigating to the page, the HTML is rendered. In the presentation step, the browser is only responsible for displaying the result.

### Real Life Experience

> **Metaphor**: After you make an order, the restaurant cooks the meal and then delivers you the finished dish.

---

## 2. CSR - Client-Side Rendering

The server only provides an empty shell. The rendering occurs in your local browser. This way the server has an easier job, and the browser has to run JavaScript to produce the final page.

### Real Life Experience

Since your browser is affected by the internet, your internet environment and your device largely impact the performance of the rendering.

> **Metaphor**: This time, you ordered the delivery of food ingredients and the recipe, and you are making this meal in your house.

---

## 3. SSG - Static Site Generation

In SSG, rendering does not happen when a user requests the page. The process has been advanced, and so the webpage is created before you access it.

In SSG, rendering running earlier than usual is given a new name: **build**. The website generating pages for itself without a user request is called the system.

### Real Life Experience

- **It is the fastest** because it avoids rendering at request time
- **It reacts slower** to real-time updates

> **Metaphor**: SSG is like the packed food in grocery stores—it's prepared in the morning and everyone who comes gets the same one.