---
title: software
pubDate: 2026-03-29T00:25:08.080Z
draft: true
description: programming paradigms
---

## What is Programming Really About?
At its core, software engineering is just connecting pipes. You have a bunch of different modules, and your job is to connect them so data can flow through.
So the question becomes: 
how do you connect them? What approach do you take? 
This is what different programming paradigms argue about.

## Three Main Paradigms
Procedural Programming (PP), is the most straightforward. You write step by step, one instruction after another.
Object Oriented Programming (OOP), organizes code around "objects" and their "states".
Functional Programming (FP), transforms data step by step, and every transformation happens through functions. Its not to say that PP or OPP cannot use functions—functions take different roles. PP uses functions within certain steps. In OOP, functions are normally called methods. An object carries its own state and methods to determine what it can do.
The core disagreement between them comes down to one thing: how do you handle state?

## State
State is your current situation. You can understand it as the context. It is how the outside world affects your code.
Here is an example. You click the log in button. The computer first checks your state: are you already logged in? Different states lead to different outcomes.
There is a related concept called side effect. If state is the outside world affecting you, side effect is you affecting the outside world.
Your code either reads or writes. When it writes, it creates side effects.
OOP takes state into account. The input includes both x and the current state, so the same operation might produce different results depending on the situation.
FP ignores state. The same input always produces the same output. This makes it easier to debug, but it also limits what you can do.

## Languages Pick Sides
Different languages lean toward different paradigms.
On the OOP side, you have JavaScript and Python.
On the FP side, you have Rust and Elixir.
Both JavaScript and Elixir can be used to build websites, but they feel very different.
JavaScript involves a lot of plumbing and connecting. It feels like you are checking things one by one, handling cases individually.
Elixir gives you more control over the big picture. The things you need to do read like a list. It is more readable, easier to understand, and easier to debug. But it demands higher abstract thinking.
Elixir is also extremely performant. WhatsApp is built on it, and it can handle millions of concurrent connections on ordinary hardware. This is because Elixir is based on Erlang, and its framework Phoenix follows a design philosophy where only the database holds state. Everything else connects through ultra-fast pipes.

## Tools and Concepts Along the Way

There are in total two different fundamental logics for loops; some loops are based on a condition, others are based on an array.

- **Condition base**: Loop or While keeps running as long as a condition is met. You loop first and see what happens.

- **Array base**: For loop iterates through an existing ordered list. You know from the start how many items there are.
Map does what a for loop does, but with a key difference. A for loop just runs through items. Map runs through items, transforms each one, and hands you back a new array. Its like you map out the original array as you make changes to it.
Reduce is the counterpart to Map. It takes an array and collapses it into a single value, or transforms it into another array.
Lazy or Generator knows the full ordered list, but only looks at the next item. A for loop loads everything into memory at once, which breaks down when the data is too large. A generator fetches on demand, saving memory.

## Type
Think of type as the panel socket on a wall. It defines the structure of data for your database. Instead of accessing the database directly, you go through a standardized interface.

## Macro
A macro is code that generates code. It produces what you need on demand.
In Rust, macros do not generate code ahead of time. The downside is that your Integrated Development Environment (IDE) cannot detect errors like how Words correct your grammars while writing, and the compiler cannot check either, because the code does not exist yet.
In Elixir, macros generate code at design time, then the build happens. This means errors can be caught earlier.

## Optimistic Design
There are advantages to all different ways of Optimistic design prioritizes user experience over data correctness.
For example, on social media apps, when you tap like, the heart fills in immediately. The server syncs later in the background.
A bank cannot do this. Data correctness must come first.

## So What Are We Really Choosing?
Choosing a programming paradigm is essentially a trade-off between the complexity of state management and the controllability of your code.
FP pursues purity and predictability. It is debug-friendly.
OOP pursues flexibility and mirrors real-world logic.
And all those tools we talked about, loops, types, macros, they exist to make this pipe system run smoother and more reliably.

![](/BB6.jpg)
The first route is the most efficient, but the second route can get you a cup of coffee on the way home. The key is to clarify your priority.