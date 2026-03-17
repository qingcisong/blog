---
title: lumen milestone#1 - Web Architecture Design
description: 'From Task Management to Energy Management'
pubDate: 2026-03-17T02:58:20.486Z
draft: true
---
## Where the Journey Began

![Lumen Milestone 1 Tech Stack](/lumen_milestone1_tech_stack.svg)

When I first started thinking about how to build Lumen, my attention was almost entirely on data access. The idea itself was clear: if I wanted Lumen to help users understand their time better, then the system had to be able to see some part of their real daily life. That naturally led me to two possible sources. One was Apple, because health-related data like sleep, heart rate, and activity already existed there. The other was Feishu, because it contains schedules, meetings, and tasks, which seemed closely related to planning.

At that stage, I was still thinking of Lumen more as a kind of task management or scheduling product, so the main question in my head was very implementation-oriented: how do I get the data I need, and which path is the most feasible?

## Discovering the Real Complexity

Once I started looking into Apple’s side more seriously, I realized that the problem was not as simple as “connect to an API and use the data.” Apple’s ecosystem is powerful, but direct access is not always easy, especially when health data is involved. There were SDK-related constraints, permission issues, and practical barriers in development.

So instead of one straightforward route, I found myself comparing several indirect methods of obtaining the data. The three main possibilities I looked at were third-party platforms such as Terra and Vital, or using Apple Shortcuts as an intermediary.

![Lumen Milestone 2 Data Paths](/lumen_mileston2_data_paths.svg)

At that point, I had to stop thinking only as a builder and start thinking more like a product designer. The question was no longer just “Which one works?” but “Which one works in a way that makes sense for this product?”

## Evaluating the Possible Paths

That led me to compare these options across several dimensions.

I looked at service performance, what exact data could be obtained, how stable each method was, what would happen if part of the system failed, how much control I would actually have, and what kinds of platform limitations I would inherit. I also had to think about development difficulty, because something that is theoretically powerful may still not be suitable if the implementation process is too heavy or fragile.

Cost mattered too—whether it was free, whether it required payment at scale, and who would be able to access it.

Another layer, which turned out to be just as important, was the user side: how difficult would the process feel to the user, and how much friction would it add before Lumen could even begin to help them?

Because a system that works technically but burdens the user is still broken.

## Choosing the Simpler Path

After comparing these paths, Shortcuts gradually became the most reasonable choice.

What made it compelling was not that it was the most advanced solution, but that it was the most direct one. It was free, the path from the original data source to Lumen was shorter, and there was no additional cloud dependency sitting in the middle. That meant the system could be simpler and more stable.

It also changed the architecture in a way that felt much cleaner. Instead of designing a backend that constantly tries to pull data from elsewhere, I could let the user’s device push the relevant information when needed.

Push instead of pull.

That reduced complexity on the server side and made the whole structure easier to control. In a product like Lumen, where trust, stability, and low friction matter a lot, that simplicity was not just a technical advantage; it was part of the product philosophy itself.

## The First Major Limitation

Of course, choosing Shortcuts did not solve everything.

It immediately introduced another set of questions. The biggest issue was that the data was incomplete. Some kinds of information, especially more detailed sleep-stage data, were not available through this route in the way I had originally imagined.

At first, I treated that as a technical limitation that needed to be fixed. I kept thinking in terms of missing metrics:

If I cannot get sleep stages, then is the whole model weakened?

If I do not have the most detailed version of sleep data, am I building on something too rough to be useful?

But this was also the point where the project started to become more interesting.

Because it forced me to step back and ask a more important question:

What exactly am I trying to predict, and which data really matters for that goal?

## Returning to the Original Goal

That became the second phase of the process.

Instead of continuing to chase every possible data point, I went back to the original intention of the product and asked what Lumen actually needed in order to succeed.

The goal was never just to collect sleep data for its own sake.

The real goal was to help answer questions like:

When is a person likely to feel tired?

When are they most cognitively capable?

How long can focused work realistically last?

Once I framed it that way, the discussion changed.

I started looking not only at what data could be directly obtained, but also at what could be inferred or calculated from the available data.

I learned that, yes, sleep information matters a lot—duration, heart rate, and other signals all contribute to understanding recovery and fatigue. But I also realized that the usefulness of a metric should be judged by whether it helps achieve the goal, not by whether it sounds scientifically complete on paper.

## A Principle Emerges

This was the moment when one important principle began to emerge:

“Roughly correct rather than precisely wrong.”

It is easy to become obsessed with accuracy at the data level and forget that the product is ultimately trying to help someone make better daily decisions.

A system can become very precise about the wrong thing. It can measure something beautifully and still fail to guide the user in any meaningful way.

On the other hand, a less perfect signal can still be extremely valuable if it points the product in the right direction.

## Energy, Not Just Sleep

As I kept pushing on that question, another shift happened.

I began to see that sleep alone was not enough. If the real target was energy—both overall energy level and the way it changes throughout the day—then I also had to think about daytime factors.

Sleep does not operate in isolation.

Daytime activity affects nighttime recovery, and nighttime recovery affects daytime performance.

![Lumen Milestone 4 Energy Cycle](/lumen_milestone4_energy_cycle.svg)

The relationship goes in both directions.

That means the thing I was really trying to understand was not a single sleep score or a static condition, but an energy curve: how a person’s state changes, when it peaks, when it declines, and what factors influence that movement.

The central object was no longer “sleep data.”

It was the broader flow of human energy across the day.

![Lumen Milestone 3 Energy Curve](/lumen_milestone3_energy_curve.svg)

## Rethinking the Role of Feishu

Once that became clear, it also changed how I understood the role of Feishu.

In the beginning, Feishu schedules and tasks seemed central because I was still approaching the product as a task-management tool. But after clarifying the actual goal, they no longer felt like the core.

They were still useful context, but not the main driver.

Lumen was not really about helping users manage a list of things to do.

It was about helping them understand the condition in which they are doing those things.

That is a very different orientation.

One is centered on external structure.
The other is centered on internal capacity.

And once I saw that distinction, the product itself started to feel more accurately named.

Lumen was not simply organizing tasks.

It was trying to enlighten your day by making your energy patterns more visible.

## Working Backward From the Goal

Looking back, what feels most valuable about this process is that the design did not become clearer by starting with implementation.

It became clearer by repeatedly working backward from the goal.

Instead of asking:

How do I get this data?

I had to ask:

Why do I want this data at all?

Instead of treating each metric as valuable by default, I had to think about where it ultimately lands in the user experience and whether it changes anything meaningful for them.

## Awareness Before Automation

That way of thinking also changed how I see digital tools in general.

A good app should not remove awareness from the user.

It should remove unnecessary burden while increasing awareness of what actually matters.

Apple Watch sleep tracking is a good example of this. It does not sleep for you, and it does not solve your habits automatically. What it does is make patterns visible enough that you start noticing the relationship between your behavior and your condition.

That awareness creates the possibility of reflection.

And reflection can lead to change.

## The Direction Ahead

That is the direction I now want Lumen to move toward.

The next steps are not just about adding more integrations or collecting more types of data for the sake of completeness. They are about studying energy levels more deeply, understanding how they evolve, deciding what kind of outputs would actually help users, and being willing to let go of features that are no longer central—such as Feishu, at least for now.

The product began as something closer to task management.

But through this process it became something more precise in its purpose:

energy management — or even more fundamentally, energy awareness.

## What Lumen Is Ultimately About

In the end, I think the deeper value of Lumen is not that it tells people what to do.

It is that it helps them see themselves more clearly.

Once something can be measured, it becomes more manageable—but measurement is only the first step.

What matters is whether that measurement helps the user become more aware, more reflective, and more able to care for themselves.

In that sense, Lumen is not really about efficiency alone.

It is also about:

self-care.
self-respect.
self-love.

Not by replacing the user’s judgment, but by making the important patterns visible enough that better decisions can begin naturally.