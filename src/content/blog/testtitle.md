---
title: testtitle
pubDate: 2026-02-02T04:08:00.372Z
draft: true
---

When we start with a big term, its usually confusing. Breaking apart this word, when people say ‘building a website,’ they usually mean engineering three layers that works together: structure (HTML), style (CSS), and interaction (JavaScript).

In front-end web development, these three core technologies work together:
HTML
CSS
JavaScript (JS)

HTML
For information, HTML stands for hypertext markup language.
In practice, this is the part where you decide the structure and templates of the page. This includes defining where is the title, the contents. We can understand HTML as the blueprint of the house, and it defines what bricks exist in the house when building a software, not how it looks.
In early web development, developers often relied on one, strong keyword to define every elements ——div, meaning divider. It creates containers for all the elements. As web engineering evolves, we now use semantic HTML that uses more meaningful keywords to label the elements such as <header>, <main>, <article>, <button>. Semantic HTML tells the browser what each “bricks” represents, and helps people to read.
When we post a website on Google, we want it to first appear up on the search platform so more people will access it. Google assess websites not by how the webpages look, but by analyzing the HTML structure. It examines where is the <h1> (main title), <article> etc to evaluate what the webpage is talking about. Semantic HTML helps because the more organized the structure is, Google approves it more. This algorithm is known as SEO (search engine optimization).

Search engines like Google analyze the HTML structure — including headings <h1>, <h2>, articles, and sections — to determine what a page is about and how information is organized.


图：代码<header> 指向网站的一个横格子是title的位置 指向第一层砖块
同样for body paragraph 
同样for 表格
砖快墙旁边是“你”看着观众 耍帅: “software engineering”

CSS
After you have this house of bricks, we want to decorate and define the style. 

人(CSS)问：how do we want our software to be seen?

We decide how does the elements (bricks) look like, the size, the color. CSS also handles responsiveness (how the layout adapts on different size screens). We can decide the very detailed alignments and spaces in between the elements to make it aesthetically pleasing.


JavaScript
In the beautiful house that we now have, we need “electric wires” to make the house adapt to our changes. Otherwise you can’t even turn the lights on when you click on the light button.

图：打不开灯：
没开灯，身边有个鬼	想象打开灯鬼就会抛开		结果开不了灯 更害怕了

So JS makes the software interactive. it is responsible for making changes when the use clicks on a certain button, when the contents have to be updated, etc. Javascript can also fetch data from a server and update the page.


A software, either an app or a website, needs these three parts to function. In a browser, HTML first loads the structure, than CSS paints it (rendering), and Javascript runs to perform behaviors and updates. In the following posts, I’ll slowly explore how these parts come together to become the webpage we see.